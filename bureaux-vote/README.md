# Bureaux de Vote — Guide d'hébergement

## Structure des fichiers

```
bureaux-vote/
├── dashboard.html     ← Page admin (liste des 72 bureaux)
├── dashboard.css
├── dashboard.js
├── bureau.css
├── bureau.js
└── bureaux/
    ├── bureau-01.html ← Page individuelle Bureau 01
    ├── bureau-02.html
    ├── ...
    └── bureau-72.html
```

## Options d'hébergement GRATUIT

### Option 1 — Netlify (recommandé, le plus simple)
1. Aller sur https://netlify.com → créer un compte gratuit
2. Glisser-déposer le dossier `bureaux-vote/` sur le dashboard Netlify
3. Netlify génère automatiquement une URL du type :
   `https://nom-aleatoire.netlify.app`

**URLs finales :**
- Dashboard : `https://votre-site.netlify.app/dashboard.html`
- Bureau 01  : `https://votre-site.netlify.app/bureaux/bureau-01.html`
- Bureau 07  : `https://votre-site.netlify.app/bureaux/bureau-07.html`

---

### Option 2 — GitHub Pages
1. Créer un compte sur https://github.com
2. Nouveau dépôt public → uploader tous les fichiers
3. Settings → Pages → Source : main branch
4. URL : `https://votre-pseudo.github.io/bureaux-vote/`

---

### Option 3 — Vercel
1. Aller sur https://vercel.com → compte gratuit
2. Importer le dossier ou connecter GitHub
3. URL automatique : `https://bureaux-vote.vercel.app`

---

## Créer les QR codes

Une fois hébergé, pour chaque bureau générer un QR code
pointant vers son URL, par exemple :

`https://votre-site.netlify.app/bureaux/bureau-07.html`

**Sites gratuits pour générer les QR codes :**
- https://qr-code-generator.com
- https://goqr.me
- https://www.qrcode-monkey.com

Générer 72 QR codes, un par bureau, et les imprimer.

---

## Personnalisation

Pour changer le nom d'un bureau, ouvrir le fichier
`bureaux/bureau-XX.html` et modifier la ligne :
```html
<span class="bureau-name">Nom du bureau</span>
```
