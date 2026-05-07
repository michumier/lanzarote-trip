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
  const hasImg = p.img && p.img.startsWith("http");
  const popupContent = `
    ${hasImg ? `<img src="${p.img}" alt="${p.name}" style="width:100%;max-height:130px;object-fit:cover;border-radius:8px;margin-bottom:6px">` : ""}
    <b>${p.name}</b><br>
    <span style="font-size:0.85rem">${p.desc}</span><br>
    <small>📍 ${p.address}</small>
    ${p.day >= 1 ? `<br><small>📅 ${dayLabels[p.day]}</small>` : ""}
  `;

  const m = L.marker([p.lat, p.lng], { icon: getIcon(p.category) });
  m.bindPopup(popupContent);
  m._placeId = p.id;
  m._category = p.category;
  m._day = p.day;
  markers[p.id] = m;
  markerGroup.addLayer(m);
});

// routes
const routeColors = { 1: "#ef4444", 2: "#a855f7", 3: "#3b82f6" };
const routePolylines = {};

function drawRoute(day) {
  if (routePolylines[day]) map.removeLayer(routePolylines[day]);
  const ids = dayRoutes[day];
  if (!ids) return;
  const coords = [BASE_CAMP, ...ids.map(id => places.find(p => p.id === id)).filter(Boolean), BASE_CAMP];
  const latlngs = coords.map(p => [p.lat, p.lng]);

  routePolylines[day] = L.polyline(latlngs, {
    color: routeColors[day],
    weight: 5,
    opacity: 0.9
  }).addTo(map);
}

// ----- FILTERS -----
const filtersEl = document.getElementById("map-filters");
let activeFilter = "all";

const filterButtons = [
  { label: "Todos los sitios", value: "all" },
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
    document.querySelectorAll(".card-wrapper").forEach(w => w.style.display = "");
  } else {
    const day = parseInt(filter);
    Object.values(markers).forEach(m => {
      if (m._day === day) {
        markerGroup.addLayer(m);
        visible.push(m);
      }
    });
    drawRoute(day);
    document.querySelectorAll(".card-wrapper").forEach(w => {
      w.style.display = parseInt(w.dataset.day) === day ? "" : "none";
    });
  }

  if (visible.length > 0) {
    const group = L.featureGroup(visible);
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

Object.values(markers).forEach(m => markerGroup.addLayer(m));
document.querySelectorAll(".card-wrapper").forEach(w => w.style.display = "");

// ----- CARDS (below map) -----
const cardsEl = document.getElementById("lugares-cards");
cardsEl.innerHTML = places.map(p => {
  const c = categoryColors[p.category] || { color: "#666", icon: "📍" };
  const hasImg = p.img && p.img.startsWith("http");
  const gradient = `linear-gradient(135deg, ${c.color}22, ${c.color}44)`;
  const imgStyle = hasImg
    ? `background-image:url(${p.img})`
    : `background:${gradient}; display:flex; align-items:center; justify-content:center; font-size:2.5rem`;
  const imgContent = hasImg ? "" : `<span>${c.icon}</span>`;
  return `
    <div class="card-wrapper" data-day="${p.day}">
      <div class="card" data-id="${p.id}">
        <div class="card-img" style="${imgStyle}">${imgContent}</div>
        <div class="card-body">
          <span class="card-cat" style="background:${c.color}">${categoryLabels[p.category] || p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
    </div>
  `;
}).join("");

// click card -> center map
cardsEl.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  const id = parseInt(card.dataset.id);
  const m = markers[id];
  if (m) {
    applyDayFilter("all");
    map.setView(m.getLatLng(), 13);
    m.openPopup();
  }
});

// ----- HERO CAROUSEL -----
const heroCarousel = document.getElementById("hero-carousel");
const heroImages = [
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Timanfaya_National_Park_landscape.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/39/Risco_de_Famara.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/95/Har%C3%ADa_with_Monte_Corona_on_Lanzarote%2C_June_2013_%282%29.jpg"
];
heroCarousel.innerHTML = heroImages.map((src, i) => `
  <div class="hero-slide${i === 0 ? " active" : ""}" style="background-image:url(${src})"></div>
`).join("");

let currentSlide = 0;
setInterval(() => {
  const slides = heroCarousel.querySelectorAll(".hero-slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

// ----- FOTOS (personal gallery) -----
const fotosGrid = document.getElementById("fotos-grid");
const fotosList = [
  "S1020169.JPG",
  "S1020178.JPG",
  "S1020181.JPG",
  "S1020185.JPG"
];

if (fotosList.length > 0) {
  fotosGrid.innerHTML = fotosList.map(f => `
    <img src="img/${f}" alt="Foto del viaje" loading="lazy">
  `).join("");
}

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

document.querySelector('a[href="#mapa"]')?.addEventListener("click", () => {
  setTimeout(() => map.invalidateSize(), 300);
});
