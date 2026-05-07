const categoryColors = {
  playa: { color: "#f59e0b", icon: "🏖️" },
  restaurante: { color: "#ef4444", icon: "🍽️" },
  naturaleza: { color: "#10b981", icon: "🌋" },
  cultura: { color: "#8b5cf6", icon: "🎨" },
  pueblo: { color: "#3b82f6", icon: "🏘️" }
};

const categoryLabels = {
  playa: "Playas",
  restaurante: "Restaurantes",
  naturaleza: "Naturaleza",
  cultura: "Cultura",
  pueblo: "Pueblos"
};

const dayLabels = {
  1: "Sábado 6 — Sur & Oeste",
  2: "Domingo 7 — Norte & Mercado",
  3: "Lunes 8 — Cultura & Relax"
};

const dayRoutes = {
  1: [16, 17, 2, 19, 20, 18, 3, 24, 22],
  2: [12, 11, 9, 6, 4, 5, 7, 8, 10, 21],
  3: [23, 14, 15, 1, 25]
};

// ----- CARDS -----
const cardsEl = document.getElementById("lugares-cards");
cardsEl.innerHTML = places.map(p => {
  const img = p.img || "";
  return `
    <div class="card" data-category="${p.category}" data-day="${p.day}">
      ${img ? `<div class="card-img" style="background-image:url(${img})"></div>` : ""}
      <div class="card-body">
        <span class="card-cat" style="background:${categoryColors[p.category]?.color || "#666"}">${categoryLabels[p.category] || p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `;
}).join("");

// ----- MAP -----
const map = L.map("map", { scrollWheelZoom: false }).setView([29.0, -13.6], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

const markers = {};
const markerGroup = L.layerGroup().addTo(map);

function getIcon(category) {
  const c = categoryColors[category] || { color: "#666" };
  return L.divIcon({
    html: `<div style="background:${c.color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)">${c.icon}</div>`,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

// base camp
const baseIcon = L.divIcon({
  html: `<div style="background:#000;color:white;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid #fbbf24;box-shadow:0 2px 8px rgba(0,0,0,0.5)"><b>🏠</b></div>`,
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18]
});

const baseMarker = L.marker([BASE_CAMP.lat, BASE_CAMP.lng], { icon: baseIcon, zIndexOffset: 1000 });
baseMarker.bindPopup(`<b>${BASE_CAMP.name}</b><br>${BASE_CAMP.desc}<br><small>${BASE_CAMP.address}</small>`);
markerGroup.addLayer(baseMarker);

places.forEach(p => {
  const img = p.img || "";
  const m = L.marker([p.lat, p.lng], { icon: getIcon(p.category) });
  m.bindPopup(`
    ${img ? `<img src="${img}" alt="${p.name}" style="width:100%;max-height:140px;object-fit:cover;border-radius:8px;margin-bottom:6px">` : ""}
    <b>${p.name}</b><br>
    <span style="font-size:0.85rem">${p.desc}</span><br>
    <small>📍 ${p.address}</small>
    ${p.day >= 1 ? `<br><small>📅 ${dayLabels[p.day]}</small>` : ""}
  `);
  m._placeId = p.id;
  m._category = p.category;
  m._day = p.day;
  markers[p.id] = m;
  markerGroup.addLayer(m);
});

// routes
const routeColors = { 1: "#ef4444", 2: "#8b5cf6", 3: "#3b82f6" };
const routePolylines = {};

function drawRoute(day) {
  if (routePolylines[day]) map.removeLayer(routePolylines[day]);
  const ids = dayRoutes[day];
  if (!ids) return;
  const coords = [BASE_CAMP, ...ids.map(id => places.find(p => p.id === id)).filter(Boolean), BASE_CAMP];
  const latlngs = coords.map(p => [p.lat, p.lng]);
  routePolylines[day] = L.polyline(latlngs, {
    color: routeColors[day],
    weight: 3,
    opacity: 0.7,
    dashArray: "10, 10"
  }).addTo(map);
}

// ----- FILTERS -----
const filtersEl = document.getElementById("map-filters");
let activeFilter = "all";

const filterButtons = [
  { label: "Todos", value: "all" },
  ...Object.entries(dayLabels).map(([k, v]) => ({ label: v, value: k }))
];

filtersEl.innerHTML = filterButtons.map(f => `
  <button class="${activeFilter === f.value ? "active" : ""}" data-filter="${f.value}">${f.label}</button>
`).join("");

filtersEl.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const filter = btn.dataset.filter;
  activeFilter = filter;
  filtersEl.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  applyDayFilter(filter);
});

function applyDayFilter(filter) {
  Object.values(routePolylines).forEach(pl => map.removeLayer(pl));

  markerGroup.clearLayers();
  markerGroup.addLayer(baseMarker);

  let visible = [];

  if (filter === "all") {
    Object.values(markers).forEach(m => markerGroup.addLayer(m));
    visible = Object.values(markers);
  } else {
    const day = parseInt(filter);
    Object.values(markers).forEach(m => {
      if (m._day === day) {
        markerGroup.addLayer(m);
        visible.push(m);
      }
    });
    drawRoute(day);
  }

  document.querySelectorAll(".card").forEach(card => {
    const d = parseInt(card.dataset.day);
    card.style.display = filter === "all" || d === parseInt(filter) ? "" : "none";
  });

  if (visible.length > 0) {
    const group = L.featureGroup(visible);
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

applyDayFilter("all");

// ----- ITINERARY -----
const timelineEl = document.getElementById("timeline");
timelineEl.innerHTML = Object.entries(dayLabels).map(([day, label]) => {
  const ids = dayRoutes[parseInt(day)];
  const items = ids.map(id => places.find(p => p.id === id)).filter(Boolean);
  const color = routeColors[parseInt(day)];
  return `
    <div class="day">
      <span class="day-badge" style="background:${color}">${label.split(" ")[0]}</span>
      <div class="day-content">
        <h3 style="color:${color}">${label}</h3>
        <ul class="day-list">
          ${items.map(p => `
            <li>
              <a href="#" class="day-place-link" data-id="${p.id}">
                ${categoryColors[p.category]?.icon} ${p.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
}).join("");

// click on itinerary place -> center map
document.querySelectorAll(".day-place-link").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const id = parseInt(e.currentTarget.dataset.id);
    const m = markers[id];
    if (m) {
// initial load — show all but don't zoom
Object.values(markers).forEach(m => markerGroup.addLayer(m));
      map.setView(m.getLatLng(), 13);
      m.openPopup();
    }
  });
});

// ----- SMOOTH SCROLL -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// fix map on tab show
document.querySelector('a[href="#mapa"]')?.addEventListener("click", () => {
  setTimeout(() => map.invalidateSize(), 300);
});

// ----- PERSONAL GALLERY -----
const galleryEl = document.getElementById("personal-gallery");
const gallerySlots = 12;
galleryEl.innerHTML = Array.from({ length: gallerySlots }, (_, i) => `
  <div class="gallery-slot" data-slot="${i}">
    <span class="slot-label">➕ Añadir foto ${i + 1}</span>
  </div>
`).join("");

// click category filter in card
document.querySelectorAll(".card-cat").forEach(el => {
  el.addEventListener("click", e => {
    e.stopPropagation();
  });
});
