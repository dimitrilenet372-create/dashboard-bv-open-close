/* ============================================================
   DASHBOARD — JavaScript
   Page : index.html
   ============================================================ */

/* ----------------------------------------------------------
   DONNÉES — 72 bureaux
   Modifier ici : nom, adresse pour chaque bureau
   Format : { nom: "...", adresse: "..." }
   ---------------------------------------------------------- */

const BUREAUX_DATA = [
  { nom: "Mairie d'arrondisement",       adresse: "1 Place d'Italie, 75013 PARIS" }, //1
  { nom: "École Élementaire",      adresse: "13 rue Fagon, 75013 PARIS" }, //2
  { nom: "École Élementaire",      adresse: "13 rue Fagon, 75013 PARIS" }, //3
  { nom: "École Élementaire A",     adresse: "42 rue Jenne, 75013 PARIS" }, //4
  { nom: "École Élementaire A",     adresse: "42 rue Jenner, 75013 PARIS" }, //5
  { nom: "École Élementaire B",        adresse: "46 rue Jenner, 75013 PARIS" }, //6
  { nom: "École Nationale de chimie physique et de biologie",     adresse: "12 rue du Banquier, 75013 PARIS" }, //7
  { nom: "École maternelle",       adresse: "8 rue Ricaut" }, //8
  { nom: "Foyer Municipal",       adresse: "9 Avenue Jean Jaurès" }, //9
  { nom: "Espace Citoyens",       adresse: "10 Rue de la Paix" }, //10
  { nom: "École V. Hugo",         adresse: "11 Rue Victor Hugo" },
  { nom: "Salle des Fêtes",       adresse: "12 Place du Marché" },
  { nom: "École J. Moulin",       adresse: "13 Avenue Jean Moulin" },
  { nom: "Chapelle St-Gilles",    adresse: "14 Rue Saint-Gilles" },
  { nom: "Collège A. France",     adresse: "15 Rue Anatole France" },
  { nom: "MJC Nord",              adresse: "16 Boulevard du Nord" },
  { nom: "Résidence Bellevue",    adresse: "17 Allée Bellevue" },
  { nom: "École M. Curie",        adresse: "18 Rue Marie Curie" },
  { nom: "Espace Marguerite",     adresse: "19 Square Marguerite" },
  { nom: "Salle G. Brassens",     adresse: "20 Rue Georges Brassens" },
  { nom: "École de Musique",      adresse: "21 Avenue de la Musique" },
  { nom: "Parc des Sports",       adresse: "22 Allée des Sports" },
  { nom: "Centre Social",         adresse: "23 Rue de la Solidarité" },
  { nom: "Éc. Maternelle Iris",   adresse: "24 Impasse des Iris" },
  { nom: "Foyer des Jeunes",      adresse: "25 Rue de la Jeunesse" },
  { nom: "Complexe Sportif",      adresse: "26 Boulevard du Sport" },
  { nom: "École République",      adresse: "27 Place de la République" },
  { nom: "Espace Voltaire",       adresse: "28 Rue Voltaire" },
  { nom: "Médiathèque",           adresse: "29 Esplanade des Arts" },
  { nom: "Salle Mistral",         adresse: "30 Rue Frédéric Mistral" },
  { nom: "École Molière",         adresse: "31 Rue Molière" },
  { nom: "Église St-Pierre",      adresse: "32 Place Saint-Pierre" },
  { nom: "Centre Aquatique",      adresse: "33 Rue de la Piscine" },
  { nom: "Foyer des Aînés",       adresse: "34 Avenue des Anciens" },
  { nom: "Hall Expo",             adresse: "35 Boulevard de l'Exposition" },
  { nom: "École Pasteur",         adresse: "36 Rue Louis Pasteur" },
  { nom: "Résidence Horizon",     adresse: "37 Allée de l'Horizon" },
  { nom: "Salle Zola",            adresse: "38 Rue Émile Zola" },
  { nom: "Maison Assoc.",         adresse: "39 Rue des Associations" },
  { nom: "Éc. Élémentaire Arc",   adresse: "40 Rue de l'Arc" },
  { nom: "Stade Municipal",       adresse: "41 Avenue du Stade" },
  { nom: "Centre Polyvalent",     adresse: "42 Place du Centre" },
  { nom: "École Jaurès",          adresse: "43 Avenue Jean Jaurès" },
  { nom: "Salle Balzac",          adresse: "44 Rue Honoré de Balzac" },
  { nom: "Foyer Rural",           adresse: "45 Route de la Campagne" },
  { nom: "École Rimbaud",         adresse: "46 Rue Arthur Rimbaud" },
  { nom: "Espace Verlaine",       adresse: "47 Rue Paul Verlaine" },
  { nom: "Gymnase Liberté",       adresse: "48 Avenue de la Liberté" },
  { nom: "École Daudet",          adresse: "49 Rue Alphonse Daudet" },
  { nom: "Salle Lumière",         adresse: "50 Avenue des Frères Lumière" },
  { nom: "Centre Démocr.",        adresse: "51 Place de la Démocratie" },
  { nom: "École Camus",           adresse: "52 Rue Albert Camus" },
  { nom: "Hall Omnisports",       adresse: "53 Boulevard Omnisports" },
  { nom: "Espace Colette",        adresse: "54 Rue Colette" },
  { nom: "Foyer du Peuple",       adresse: "55 Place du Peuple" },
  { nom: "École Flaubert",        adresse: "56 Rue Gustave Flaubert" },
  { nom: "Résidence Aurore",      adresse: "57 Allée de l'Aurore" },
  { nom: "Salle Sand",            adresse: "58 Rue George Sand" },
  { nom: "Centre Animation",      adresse: "59 Square de l'Animation" },
  { nom: "École Malraux",         adresse: "60 Avenue André Malraux" },
  { nom: "MJC Sud",               adresse: "61 Boulevard du Sud" },
  { nom: "Complexe Renoir",       adresse: "62 Rue Auguste Renoir" },
  { nom: "École Monet",           adresse: "63 Rue Claude Monet" },
  { nom: "Salle Debussy",         adresse: "64 Avenue Claude Debussy" },
  { nom: "Espace Chopin",         adresse: "65 Rue Frédéric Chopin" },
  { nom: "Centre Baudelaire",     adresse: "66 Rue Charles Baudelaire" },
  { nom: "École Verlaine",        adresse: "67 Rue Paul Verlaine" },
  { nom: "Foyer Stendhal",        adresse: "68 Rue Stendhal" },
  { nom: "Salle Hugo",            adresse: "69 Place Victor Hugo" },
  { nom: "École Zola",            adresse: "70 Rue Émile Zola" },
  { nom: "Mairie Annexe",         adresse: "71 Avenue de la Mairie" },
  { nom: "Centre Laïque",         adresse: "72 Rue de la Laïcité" },
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
      return BUREAUX_DATA.map((d, i) => ({
        id:      i + 1,
        nom:     d.nom,
        adresse: d.adresse,
        statut:  (data[i] && data[i].statut) ? data[i].statut : 'closed',
        heure:   (data[i] && data[i].heure)  ? data[i].heure  : null
      }));
    }
  } catch (e) {}
  return BUREAUX_DATA.map((d, i) => ({
    id:      i + 1,
    nom:     d.nom,
    adresse: d.adresse,
    statut:  'closed',
    heure:   null
  }));
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
   Grille — recherche sur numéro, nom ET adresse
   ---------------------------------------------------------- */

function render() {
  const q    = document.getElementById('search').value.toLowerCase();
  const list = bureaux.filter(b => {
    const mf = _filter === 'all' || b.statut === _filter;
    const ms = !q
      || b.nom.toLowerCase().includes(q)
      || b.adresse.toLowerCase().includes(q)
      || pad(b.id).includes(q);
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
      <span class="c-adresse">${b.adresse}</span>
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
  document.getElementById('modal-adresse').textContent       = b.adresse;
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
