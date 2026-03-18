/* ============================================================
   BUREAU INDIVIDUEL — JavaScript
   ============================================================ */

const bureauNumEl  = document.querySelector('.bureau-num');
const bureauNumTxt = bureauNumEl ? bureauNumEl.textContent.trim() : 'Bureau';

const STORAGE_KEY = 'bureau_statut_' + bureauNumTxt.replace(/\s+/g, '_');

let _current = 'closed';
let _chosen  = null;

function sauvegarder(statut, heure) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ statut, heure })); } catch (e) {}
}

function charger() {
  try { const s = localStorage.getItem(STORAGE_KEY); if (s) return JSON.parse(s); } catch (e) {}
  return { statut: 'closed', heure: null };
}

function pad(n) { return String(n).padStart(2, '0'); }
function nowStr() { const d = new Date(); return pad(d.getHours()) + ':' + pad(d.getMinutes()); }

function appliquerStatut(s, t) {
  document.getElementById('current-badge').className   = s;
  document.getElementById('current-dot').className     = s;
  document.getElementById('current-label').textContent = s === 'open' ? 'Ouvert' : 'Fermé';
  const timeEl = document.getElementById('current-time');
  if (timeEl) timeEl.textContent = t ? 'Mis à jour à ' + t : '';
}

function pick(s) {
  _chosen = s;
  document.getElementById('btn-open').className   = 'btn-status' + (s === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (s === 'closed' ? ' sel-closed' : '');
  document.getElementById('btn-confirm').disabled = (s === _current);
}

function confirmBureau() {
  if (!_chosen || _chosen === _current) return;
  _current = _chosen;
  const t  = nowStr();
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

function back() {
  _chosen = null;
  document.getElementById('btn-open').className   = 'btn-status' + (_current === 'open'   ? ' sel-open'   : '');
  document.getElementById('btn-closed').className = 'btn-status' + (_current === 'closed' ? ' sel-closed' : '');
  document.getElementById('btn-confirm').disabled = true;
  document.getElementById('success').classList.remove('visible');
  document.getElementById('main').classList.remove('hidden');
}

 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDa8YO-DiY0eH7IQanoYi0Vd62t5DE3Kgo",
    authDomain: "mairie-13-bv.firebaseapp.com",
    databaseURL: "https://mairie-13-bv-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mairie-13-bv",
    storageBucket: "mairie-13-bv.firebasestorage.app",
    messagingSenderId: "868318584382",
    appId: "1:868318584382:web:69b37e44e5d249b34efb6f",
    measurementId: "G-FDFKZMFMJS"
  };

  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const saved = charger();
_current    = saved.statut;
_chosen     = _current;
appliquerStatut(_current, saved.heure);
document.getElementById('btn-open').className   = 'btn-status' + (_current === 'open'   ? ' sel-open'   : '');
document.getElementById('btn-closed').className = 'btn-status' + (_current === 'closed' ? ' sel-closed' : '');
document.getElementById('btn-confirm').disabled = true;
