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

// ----- CARDS -----
const cardsEl = document.getElementById("lugares-cards");
cardsEl.innerHTML = places.map(p => `
  <div class="card" data-category="${p.category}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
  </div>
`).join("");

// ----- MAP -----
const map = L.map("map", { scrollWheelZoom: false }).setView([29.0, -13.6], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

const markers = [];
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

places.forEach(p => {
  const m = L.marker([p.lat, p.lng], { icon: getIcon(p.category) });
  m.bindPopup(`<b>${p.name}</b><br>${p.desc}<br><small>${p.address}</small>`);
  m._placeId = p.id;
  m._category = p.category;
  markers.push(m);
  markerGroup.addLayer(m);
});

// ----- FILTERS -----
const filtersEl = document.getElementById("map-filters");
const allCategories = [...new Set(places.map(p => p.category))];

let activeFilter = "all";

const filterButtons = [
  { label: "Todos", value: "all" },
  ...allCategories.map(c => ({ label: categoryLabels[c] || c, value: c }))
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
  applyFilter(filter);
});

function applyFilter(filter) {
  markerGroup.clearLayers();
  markers.forEach(m => {
    if (filter === "all" || m._category === filter) {
      markerGroup.addLayer(m);
    }
  });
  // also filter cards
  document.querySelectorAll(".card").forEach(card => {
    const cat = card.dataset.category;
    card.style.display = filter === "all" || cat === filter ? "" : "none";
  });
}

// ----- ITINERARY (placeholder) -----
const timelineEl = document.getElementById("timeline");
timelineEl.innerHTML = `
  <div class="timeline-placeholder">
    <p>Todavía no hemos organizado los días. Cuando tengamos el planning, aquí aparecerá el itinerario día a día.</p>
  </div>
`;

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
