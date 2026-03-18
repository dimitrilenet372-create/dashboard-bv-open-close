/* ============================================================
   BUREAU INDIVIDUEL — JavaScript
   ============================================================ */

/* Récupérer le numéro du bureau depuis le DOM */
const bureauNumEl  = document.querySelector('.bureau-num');
const bureauNumTxt = bureauNumEl ? bureauNumEl.textContent.trim() : 'Bureau';

/* Clé localStorage unique par bureau (basée sur le numéro dans le DOM) */
const STORAGE_KEY = 'bureau_statut_' + bureauNumTxt.replace(/\s+/g, '_');

let _current = 'closed';
let _chosen  = null;

/* ----------------------------------------------------------
   localStorage — sauvegarde et chargement
   ---------------------------------------------------------- */

function sauvegarder(statut, heure) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ statut, heure }));
  } catch (e) {}
}

function charger() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { statut: 'closed', heure: null };
}

/* ----------------------------------------------------------
   Utilitaires
   ---------------------------------------------------------- */

function pad(n) {
  return String(n).padStart(2, '0');
}

function nowStr() {
  const d = new Date();
  return pad(d.getHours()) + ':' + pad(d.getMinutes());
}

/* ----------------------------------------------------------
   Appliquer un statut dans le DOM
   ---------------------------------------------------------- */

function appliquerStatut(s, t) {
  document.getElementById('current-badge').className   = s;
  document.getElementById('current-dot').className     = s;
  document.getElementById('current-label').textContent = s === 'open' ? 'Ouvert' : 'Fermé';
  document.getElementById('current-time').textContent  = t ? 'Mis à jour à ' + t : '';
}

/* ----------------------------------------------------------
   Sélection Ouvert / Fermé  — onclick="pick('open')"
   ---------------------------------------------------------- */

function pick(s) {
  _chosen = s;

  document.getElementById('btn-open').className   = 'btn-status' + (s === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (s === 'closed' ? ' sel-closed' : '');

  document.getElementById('btn-confirm').disabled = (s === _current);
}

/* ----------------------------------------------------------
   Confirmation  — onclick="confirmBureau()"
   ---------------------------------------------------------- */

function confirmBureau() {
  if (!_chosen || _chosen === _current) return;

  _current  = _chosen;
  const t   = nowStr();

  appliquerStatut(_current, t);
  sauvegarder(_current, t);

  document.getElementById('main').classList.add('hidden');

  const circle = document.getElementById('s-circle');
  const icon   = document.getElementById('s-icon');
  circle.className = _current;

  if (_current === 'open') {
    icon.innerHTML = '<path d="M10 16l4 4 8-8" stroke="#1D9E75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    document.getElementById('s-title').textContent = bureauNumTxt + ' marqué Ouvert';
  } else {
    icon.innerHTML = '<path d="M10 10l12 12M22 10l-12 12" stroke="#E24B4A" stroke-width="2" stroke-linecap="round"/>';
    document.getElementById('s-title').textContent = bureauNumTxt + ' marqué Fermé';
  }

  document.getElementById('s-sub').textContent = 'Enregistré à ' + t;
  document.getElementById('success').classList.add('visible');
}

/* ----------------------------------------------------------
   Retour depuis l'écran de succès  — onclick="back()"
   ---------------------------------------------------------- */

function back() {
  _chosen = null;

  document.getElementById('btn-open').className   = 'btn-status' + (_current === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (_current === 'closed' ? ' sel-closed' : '');
  document.getElementById('btn-confirm').disabled = true;

  document.getElementById('success').classList.remove('visible');
  document.getElementById('main').classList.remove('hidden');
}

/* ----------------------------------------------------------
   Init — restaurer l'état depuis localStorage
   ---------------------------------------------------------- */

const saved = charger();
_current = saved.statut;
_chosen  = _current;

appliquerStatut(_current, saved.heure);

document.getElementById('btn-open').className   = 'btn-status' + (_current === 'open'   ? ' sel-open'   : '');
document.getElementById('btn-closed').className = 'btn-status' + (_current === 'closed' ? ' sel-closed' : '');
document.getElementById('btn-confirm').disabled = true;
