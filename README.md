# Mr Nutella Koléa — Site Web Officiel 🍫

**The Home Of Desserts · Depuis 2008**

Site vitrine de **Mr Nutella**, la première crêperie de Koléa (Tipaza, Algérie) : crêpes, gaufres, bubble waffles, pancakes, sundaes, milkshakes, smoothies et le fameux **Cake Dubai** — en deux versions, **Nutella** et **El Mordjene**.

🌐 **Réseaux** : [Instagram @mr_nutella_kolea](https://www.instagram.com/mr_nutella_kolea/) · [Facebook](https://www.facebook.com/mrnutellakolea/) · [TikTok](https://www.tiktok.com/@mr.nutella.kolea)
📍 Rue Ali Dahmane, Koléa 42400 · 📞 +213 559 26 47 15 · 🕐 Tous les jours 12h00–00h00

## ✨ Fonctionnalités

- **Bilingue FR / AR (RTL)** — bouton de bascule dans la barre de navigation, préférence mémorisée
- **Menu complet interactif** — 95 articles, 12 catégories, double tarification Nutella / El Mordjene, recherche en direct, favoris ❤️
- **Crée ton Dessert** — configurateur 4 étapes (base → chocolat → fruits → toppings) avec aperçu SVG en direct, calcul du prix et **commande WhatsApp en 1 clic**
- **Menu officiel en images** — 8 planches avec lightbox (zoom, navigation clavier) + téléchargement du menu complet
- **Galerie réelle** — photos des créations directement d'Instagram
- **Family Boxes & Cake Dubai** — pages dédiées avec commande WhatsApp
- **Google Maps**, avis clients, horaires, image promo Open Graph pour le partage social
- **Zéro dépendance** — HTML/CSS/JS statique pur, aucune étape de build

## 🗂 Structure

```
├── index.html          # Accueil (hero, catégories, best sellers, configurateur…)
├── menu.html           # Menu complet + planches officielles
├── build.html          # Configurateur "Crée ton Dessert"
├── boxes.html          # Family Boxes & Cake Dubai
├── gallery.html        # Galerie photos
├── about.html          # Notre histoire (depuis 2008)
├── contact.html        # Contact + carte
├── promo.html          # Générateur de l'image promo (1200×630)
├── css/style.css       # Design system complet (couleurs & typo de la marque)
├── js/data.js          # Données du menu (FR/AR) + infos de contact
├── js/i18n.js          # Traductions FR/AR de l'interface
├── js/main.js          # Logo & icônes SVG, i18n, menu, configurateur, lightbox
└── assets/             # Photos produits, planches menu, logo, image promo
```

## 🎨 Marque

| Élément | Valeur |
|---|---|
| Chocolat | `#3A2416` |
| Nutella Red | `#E63946` |
| Golden Honey | `#F4B000` |
| Cream | `#FFF6E9` |
| Titres | Baloo 2 / Baloo Bhaijaan 2 (AR) |
| Texte | Poppins / Tajawal (AR) |
| Prix | Montserrat SemiBold |

## 🚀 Lancer en local

Aucun build nécessaire — servez simplement le dossier :

```bash
npx http-server . -p 8092 -c-1
```

Puis ouvrez `http://localhost:8092`.

## 📤 Déploiement

Hébergement statique au choix : GitHub Pages, Netlify, Vercel, ou n'importe quel hébergeur (Hostinger…). Uploadez le contenu du dossier tel quel.

---

© 2008–2026 Mr Nutella Koléa. Site réalisé avec ❤️ (et beaucoup de chocolat).
