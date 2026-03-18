/* ============================================================
   DASHBOARD — JavaScript
   Page : index.html
   ============================================================ */

const NOMS = [
  "Mairie d'arrondissement",      "Ecole élémentaire",    "Gymnase R. Cassin",
  "Salle Polyvalente",    "Maison de Quartier",  "École P. Curie",
  "Bibliothèque Mun.",    "Centre Culturel",     "Foyer Municipal",
  "Espace Citoyens",      "École V. Hugo",       "Salle des Fêtes",
  "École J. Moulin",      "Chapelle St-Gilles",  "Collège A. France",
  "MJC Nord",             "Résidence Bellevue",  "École M. Curie",
  "Espace Marguerite",    "Salle G. Brassens",   "École de Musique",
  "Parc des Sports",      "Centre Social",       "Éc. Maternelle Iris",
  "Foyer des Jeunes",     "Complexe Sportif",    "École République",
  "Espace Voltaire",      "Médiathèque",         "Salle Mistral",
  "École Molière",        "Église St-Pierre",    "Centre Aquatique",
  "Foyer des Aînés",      "Hall Expo",           "École Pasteur",
  "Résidence Horizon",    "Salle Zola",          "Maison Assoc.",
  "Éc. Élémentaire Arc",  "Stade Municipal",     "Centre Polyvalent",
  "École Jaurès",         "Salle Balzac",        "Foyer Rural",
  "École Rimbaud",        "Espace Verlaine",     "Gymnase Liberté",
  "École Daudet",         "Salle Lumière",       "Centre Démocr.",
  "École Camus",          "Hall Omnisports",     "Espace Colette",
  "Foyer du Peuple",      "École Flaubert",      "Résidence Aurore",
  "Salle Sand",           "Centre Animation",    "École Malraux",
  "MJC Sud",              "Complexe Renoir",     "École Monet",
  "Salle Debussy",        "Espace Chopin",       "Centre Baudelaire",
  "École Verlaine",       "Foyer Stendhal",      "Salle Hugo",
  "École Zola",           "Mairie Annexe",       "Centre Laïque"
];

/* ----------------------------------------------------------
   localStorage
   ---------------------------------------------------------- */

const STORAGE_KEY = 'bureaux_statuts';

function sauvegarder() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(
      bureaux.map(b => ({ statut: b.statut, heure: b.heure }))
    ));
  } catch (e) {}
}

function charger() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return NOMS.map((nom, i) => ({
        id:     i + 1,
        nom:    nom,
        statut: (data[i] && data[i].statut) ? data[i].statut : 'closed',
        heure:  (data[i] && data[i].heure)  ? data[i].heure  : null
      }));
    }
  } catch (e) {}
  return NOMS.map((nom, i) => ({ id: i + 1, nom, statut: 'closed', heure: null }));
}

const bureaux = charger();

let _filter   = 'all';
let _activeId = null;
let _chosen   = null;

/* ----------------------------------------------------------
   Utilitaires
   ---------------------------------------------------------- */

function pad(n) { return String(n).padStart(2, '0'); }
function nowStr() {
  const d = new Date();
  return pad(d.getHours()) + ':' + pad(d.getMinutes());
}

/* ----------------------------------------------------------
   Stats
   ---------------------------------------------------------- */

function renderStats() {
  const open = bureaux.filter(b => b.statut === 'open').length;
  document.getElementById('s-open').textContent   = open + ' ouverts';
  document.getElementById('s-closed').textContent = (72 - open) + ' fermés';
}

/* ----------------------------------------------------------
   Grille
   ---------------------------------------------------------- */

function render() {
  const q    = document.getElementById('search').value.toLowerCase();
  const list = bureaux.filter(b => {
    const mf = _filter === 'all' || b.statut === _filter;
    const ms = !q || b.nom.toLowerCase().includes(q) || pad(b.id).includes(q);
    return mf && ms;
  });

  const grid = document.getElementById('grid');

  if (!list.length) {
    grid.innerHTML = '<p class="empty">Aucun bureau trouvé</p>';
    renderStats();
    return;
  }

  grid.innerHTML = list.map(b => `
    <div class="card ${b.statut}" onclick="openModal(${b.id})">
      <span class="c-num">Bureau ${pad(b.id)}</span>
      <span class="c-name">${b.nom}</span>
      <span class="c-badge ${b.statut}">
        <span class="c-dot ${b.statut}"></span>
        ${b.statut === 'open' ? 'Ouvert' : 'Fermé'}
      </span>
      ${b.heure ? `<span class="c-time">${b.heure}</span>` : ''}
    </div>
  `).join('');

  renderStats();
}

/* ----------------------------------------------------------
   Filtres
   ---------------------------------------------------------- */

function setF(f) {
  _filter = f;
  document.getElementById('f-all').className    = 'f-btn' + (f === 'all'    ? ' a-all'    : '');
  document.getElementById('f-open').className   = 'f-btn' + (f === 'open'   ? ' a-open'   : '');
  document.getElementById('f-closed').className = 'f-btn' + (f === 'closed' ? ' a-closed' : '');
  render();
}

/* ----------------------------------------------------------
   Modale — ouverture
   ---------------------------------------------------------- */

function openModal(id) {
  _activeId = id;
  _chosen   = null;
  const b   = bureaux[id - 1];

  document.getElementById('modal-title').textContent         = 'Bureau ' + pad(b.id);
  document.getElementById('modal-sub').textContent           = b.nom;
  document.getElementById('modal-current').className         = 'modal-current ' + b.statut;
  document.getElementById('modal-dot').className             = 'modal-dot ' + b.statut;
  document.getElementById('modal-current-label').textContent = b.statut === 'open' ? 'Ouvert' : 'Fermé';

  document.getElementById('btn-open').className   = 'btn-status' + (b.statut === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (b.statut === 'closed' ? ' sel-closed' : '');

  _chosen = b.statut;
  document.getElementById('btn-confirm').disabled = false;
  document.getElementById('overlay').classList.add('visible');
}

/* ----------------------------------------------------------
   Modale — fermeture
   ---------------------------------------------------------- */

function closeModal() {
  document.getElementById('overlay').classList.remove('visible');
  _activeId = null;
  _chosen   = null;
}

/* ----------------------------------------------------------
   Sélection Ouvert / Fermé
   ---------------------------------------------------------- */

function selectStatus(s) {
  _chosen = s;

  document.getElementById('btn-open').className   = 'btn-status' + (s === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (s === 'closed' ? ' sel-closed' : '');

  document.getElementById('modal-current').className         = 'modal-current ' + s;
  document.getElementById('modal-dot').className             = 'modal-dot ' + s;
  document.getElementById('modal-current-label').textContent = s === 'open' ? 'Ouvert' : 'Fermé';

  document.getElementById('btn-confirm').disabled = (s === bureaux[_activeId - 1].statut);
}

/* ----------------------------------------------------------
   Confirmation
   ---------------------------------------------------------- */

function confirmStatus() {
  if (!_activeId || !_chosen) return;

  const b  = bureaux[_activeId - 1];
  b.statut = _chosen;
  b.heure  = nowStr();

  sauvegarder();
  closeModal();
  render();
  showToast('Bureau ' + pad(b.id) + ' — ' + (_chosen === 'open' ? 'Ouvert' : 'Fermé'));
}

/* ----------------------------------------------------------
   Toast
   ---------------------------------------------------------- */

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ----------------------------------------------------------
   Init
   ---------------------------------------------------------- */

document.getElementById('search').addEventListener('input', render);

document.getElementById('overlay').addEventListener('click', function (e) {
  if (e.target === document.getElementById('overlay')) closeModal();
});

document.getElementById('date-label').textContent =
  new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });

render();
