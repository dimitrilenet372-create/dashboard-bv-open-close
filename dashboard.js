/* ============================================================
   DASHBOARD — JavaScript
   Firebase Realtime Database (CDN compat — pas de modules ES6)
   ============================================================ */

const firebaseConfig = {
  apiKey:            "AIzaSyDa8YO-DiY0eH7IQanoYi0Vd62t5DE3Kgo",
  authDomain:        "mairie-13-bv.firebaseapp.com",
  databaseURL:       "https://mairie-13-bv-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "mairie-13-bv",
  storageBucket:     "mairie-13-bv.firebasestorage.app",
  messagingSenderId: "868318584382",
  appId:             "1:868318584382:web:69b37e44e5d249b34efb6f",
  measurementId:     "G-FDFKZMFMJS"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const BUREAUX_DATA = [
  { nom: "Mairie d'Arrondissement", adresse: "1 Place d'Italie, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "13 Rue Fagon, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "13 Rue Fagon, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "42 Rue Jenner, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "42 Rue Jenner, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "46 Rue Jenner, 75013 Paris" },
  { nom: "Ecole Nationale de Chimie Physique et Biologie", adresse: "12 Rue du Banquier, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "8 Rue Ricaut, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "8 Rue Ricaut, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "173 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "173 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "33 Place Jeanne d'Arc, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "33 Place Jeanne d'Arc, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "103 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "57 Rue Baudricourt, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "57 Rue Baudricourt, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "55 Rue Baudricourt, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "55 Rue Baudricourt, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "47 Avenue d'Ivry, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "3 Rue Émile Levassor, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "51 Avenue de la Porte d'Ivry, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "9 Rue Franc Nohain, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "37 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "31 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Gymnase Marcel Cerdan", adresse: "5bis Rue Eugene Oudine, 75013 Paris" },
  { nom: "Gymnase Marcel Cerdan", adresse: "5bis Rue Eugene Oudine, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "15 Rue de Domremy, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "30 Place Jeanne d'Arc, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "30 Place Jeanne d'Arc, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "63 Rue Dunois, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "64 Rue Dunois, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "60 Rue Dunois, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "8 Rue George Balanchine, 75013 Paris" },
  { nom: "Ecole Polyvalente", adresse: "21 Rue Primo Levi, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "103 Avenue de Choisy, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "103 Avenue de Choisy, 75013 Paris" },
  { nom: "College Camille Claudel", adresse: "4bis Avenue de Choisy, 75013 Paris" },
  { nom: "College Camille Claudel", adresse: "4bis Avenue de Choisy, 75013 Paris" },
  { nom: "Lycee Professionnel Gaston Bachelard", adresse: "2 Rue Tagore, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "157 Rue de Tolbiac, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "5 Rue Damesme, 75013 Paris" },
  { nom: "College Evariste Galois", adresse: "11 Rue du Docteur Bourneville, 75013 Paris" },
  { nom: "Ecole Polyvalente", adresse: "77 Rue Damesme, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "8 Rue Kuss, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "8 Rue Kuss, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "84 Boulevard Kellermann, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "87 Rue Brillat Savarin, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "5 Rue de la Providence, 75013 Paris" },
  { nom: "Ecole Elementaire A", adresse: "5 Rue de la Providence, 75013 Paris" },
  { nom: "Ecole Elementaire B", adresse: "7 Rue de la Providence, 75013 Paris" },
  { nom: "College Georges Braque", adresse: "5 Rue Henri Becque, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "16 Rue Wurtz, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "16 Rue Wurtz, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "16 Rue Wurtz, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "100 Rue de la Glaciere, 75013 Paris" },
  { nom: "College Moulin des Pres", adresse: "18 Rue du Moulin des Pres, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "38 Rue Vandrezanne, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "38 Rue Vandrezanne, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "40 Rue Vandrezanne, 75013 Paris" },
  { nom: "Gymnase Auguste Blanqui", adresse: "26 Boulevard Auguste Blanqui, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "2 Rue Paul Gervais, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "13 Rue Vulpian, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "140 Rue Leon Maurice Nordmann, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "140 Rue Leon Maurice Nordmann, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "30 Boulevard Arago, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "30 Boulevard Arago, 75013 Paris" },
  { nom: "Ecole Maternelle", adresse: "11 Rue de Croulebarbe, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "40 Rue du Chateau des Rentiers, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "9 Rue Auguste Perret, 75013 Paris" },
  { nom: "Ecole Elementaire", adresse: "8 Rue George Balanchine, 75013 Paris" },
  { nom: "Ecole Polyvalente", adresse: "31 Boulevard du General Jean Simon, 75013 Paris" },
  { nom: "Ecole Polyvalente Grands Moulins", adresse: "47 Rue des Grands Moulins, 75013 Paris" },
];

/* ── État local ── */
let bureaux   = BUREAUX_DATA.map((d, i) => ({ id: i+1, nom: d.nom, adresse: d.adresse, statut: "closed", heure: null }));
let _filter   = "all";
let _activeId = null;
let _chosen   = null;

function pad(n) { return String(n).padStart(2, "0"); }
function nowStr() { const d = new Date(); return pad(d.getHours()) + ":" + pad(d.getMinutes()); }

/* ── Feux d'artifice ── */
let _fireworksActive = false;
let _fireworksFrame  = null;
const PARTICLES = [];

function lancerFeuArtifice(canvas) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.6;
  const hue = Math.random() * 360;
  const count = 80 + Math.floor(Math.random() * 40);
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i;
    const speed = 2 + Math.random() * 4;
    PARTICLES.push({ x, y,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      alpha: 1, hue: hue + Math.random() * 40 - 20,
      size: 2 + Math.random() * 2, decay: 0.012 + Math.random() * 0.008 });
  }
}

function animerFeux() {
  const canvas = document.getElementById("fw");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.05) lancerFeuArtifice(canvas);
  for (let i = PARTICLES.length - 1; i >= 0; i--) {
    const p = PARTICLES[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.alpha -= p.decay;
    if (p.alpha <= 0) { PARTICLES.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "hsla(" + p.hue + ",100%,65%," + p.alpha + ")";
    ctx.fill();
  }
  _fireworksFrame = requestAnimationFrame(animerFeux);
}

function startFireworks() {
  if (_fireworksActive) return;
  _fireworksActive = true;
  const c = document.getElementById("fw");
  if (c) c.style.display = "block";
  animerFeux();
  const popup = document.getElementById("popup-all-open");
  if (popup) popup.style.display = "flex";
}

function stopFireworks() {
  if (!_fireworksActive) return;
  _fireworksActive = false;
  if (_fireworksFrame) cancelAnimationFrame(_fireworksFrame);
  const c = document.getElementById("fw");
  if (c) { c.style.display = "none"; c.getContext("2d").clearRect(0,0,c.width,c.height); }
  PARTICLES.length = 0;
}

function fermerPopup() {
  const popup = document.getElementById("popup-all-open");
  if (popup) popup.style.display = "none";
  stopFireworks();
}

/* ── Stats ── */
function renderStats() {
  const open = bureaux.filter(b => b.statut === "open").length;
  document.getElementById("s-open").textContent   = open + " ouverts";
  document.getElementById("s-closed").textContent = (72 - open) + " fermés";
  if (open === 72) startFireworks();
  else             stopFireworks();
}

/* ── Grille ── */
function render() {
  const q    = document.getElementById("search").value.toLowerCase();
  const list = bureaux.filter(b => {
    const mf = _filter === "all" || b.statut === _filter;
    const ms = !q || b.nom.toLowerCase().includes(q) || b.adresse.toLowerCase().includes(q) || pad(b.id).includes(q);
    return mf && ms;
  });
  const grid = document.getElementById("grid");
  if (!list.length) { grid.innerHTML = '<p class="empty">Aucun bureau trouvé</p>'; renderStats(); return; }
  grid.innerHTML = list.map(b => `
    <div class="card ${b.statut}" onclick="openModal(${b.id})">
      <span class="c-num">Bureau ${pad(b.id)}</span>
      <span class="c-name">${b.nom}</span>
      <span class="c-adresse">${b.adresse}</span>
      <span class="c-badge ${b.statut}"><span class="c-dot ${b.statut}"></span>${b.statut === "open" ? "Ouvert" : "Fermé"}</span>
      ${b.heure ? `<span class="c-time">${b.heure}</span>` : ""}
    </div>
  `).join("");
  renderStats();
}

/* ── Filtres ── */
function setF(f) {
  _filter = f;
  document.getElementById("f-all").className    = "f-btn" + (f === "all"    ? " a-all"    : "");
  document.getElementById("f-open").className   = "f-btn" + (f === "open"   ? " a-open"   : "");
  document.getElementById("f-closed").className = "f-btn" + (f === "closed" ? " a-closed" : "");
  render();
}

/* ── Modale ── */
function openModal(id) {
  _activeId = id; _chosen = null;
  const b = bureaux[id - 1];
  document.getElementById("modal-title").textContent         = "Bureau " + pad(b.id);
  document.getElementById("modal-sub").textContent           = b.nom;
  document.getElementById("modal-adresse").textContent       = b.adresse;
  document.getElementById("modal-current").className         = "modal-current " + b.statut;
  document.getElementById("modal-dot").className             = "modal-dot " + b.statut;
  document.getElementById("modal-current-label").textContent = b.statut === "open" ? "Ouvert" : "Fermé";
  document.getElementById("btn-open").className   = "btn-status" + (b.statut === "open"   ? " sel-open"   : "");
  document.getElementById("btn-closed").className = "btn-status" + (b.statut === "closed" ? " sel-closed" : "");
  _chosen = b.statut;
  document.getElementById("btn-confirm").disabled = false;
  document.getElementById("overlay").classList.add("visible");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("visible");
  _activeId = null; _chosen = null;
}

function selectStatus(s) {
  _chosen = s;
  document.getElementById("btn-open").className   = "btn-status" + (s === "open"   ? " sel-open"   : "");
  document.getElementById("btn-closed").className = "btn-status" + (s === "closed" ? " sel-closed" : "");
  document.getElementById("modal-current").className         = "modal-current " + s;
  document.getElementById("modal-dot").className             = "modal-dot " + s;
  document.getElementById("modal-current-label").textContent = s === "open" ? "Ouvert" : "Fermé";
  document.getElementById("btn-confirm").disabled = (s === bureaux[_activeId - 1].statut);
}

function confirmStatus() {
  if (!_activeId || !_chosen) return;
  const b  = bureaux[_activeId - 1];
  const t  = nowStr();
  db.ref("bureaux").update({ ["bureau_" + pad(b.id)]: { statut: _chosen, heure: t } });
  closeModal();
}

/* ── Écoute Firebase temps réel ── */
db.ref("bureaux").on("value", function(snapshot) {
  document.getElementById("loading").style.display = "none";
  const data = snapshot.val() || {};
  bureaux = BUREAUX_DATA.map((d, i) => {
    const key   = "bureau_" + pad(i + 1);
    const saved = data[key] || {};
    return { id: i+1, nom: d.nom, adresse: d.adresse, statut: saved.statut || "closed", heure: saved.heure || null };
  });
  render();
});

/* ── Init ── */
document.getElementById("search").addEventListener("input", render);
document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === document.getElementById("overlay")) closeModal();
});
document.getElementById("date-label").textContent =
  new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
