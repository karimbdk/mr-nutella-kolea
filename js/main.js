/* ============================================================
   MR NUTELLA — main.js
   ============================================================ */

/* ---------- Language ---------- */
let LANG = localStorage.getItem("mn_lang") || "fr";

function t(key){ return (T[key] && T[key][LANG]) || (T[key] && T[key].fr) || key; }

function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  const lb = document.querySelectorAll(".lang-btn");
  lb.forEach(b=> b.textContent = LANG === "fr" ? "عربي" : "FR");
  document.title = document.body.dataset.title ?
    (LANG==="ar" ? document.body.dataset.titleAr : document.body.dataset.title) : document.title;
}
function toggleLang(){
  LANG = LANG === "fr" ? "ar" : "fr";
  localStorage.setItem("mn_lang", LANG);
  applyLang();
  document.dispatchEvent(new Event("langchange"));
}

/* ---------- SVG LIBRARY (brand-drawn) ---------- */
const CH = "#3A2416", CH2="#5a3a24", RED="#E63946", GOLD="#F4B000", CREAM="#FFF6E9", DARKC="#2A1810";

/* Logo — recreation of the Mr nutella brand mark */
function logoSVG(h=46, light=false){
  const mrFill = GOLD, bracket = light ? CREAM : "#1E1E1E";
  return `<svg viewBox="0 0 300 120" style="height:${h}px;width:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mr Nutella">
  <g stroke="${bracket}" stroke-width="9" stroke-linecap="round" fill="none">
    <path d="M28 14 Q14 16 15 30 L15 90 Q14 106 30 106"/>
    <path d="M262 12 Q280 13 279 28 L279 52"/>
  </g>
  <text x="40" y="62" font-family="'Baloo 2',cursive" font-weight="800" font-size="58" fill="${mrFill}">Mr</text>
  <g font-family="'Baloo 2',cursive" font-weight="800" font-size="46">
    <text x="40" y="103" fill="${light ? CREAM : '#1E1E1E'}">n</text>
    <text x="68" y="103" fill="${RED}">utella</text>
  </g>
  <g fill="${DARKC}">
    <path d="M232 30 q10 -12 4 -20 q12 6 2 22 z"/>
    <circle cx="248" cy="18" r="5"/>
    <circle cx="252" cy="34" r="3.6"/>
  </g>
  <rect x="150" y="108" width="112" height="4" rx="2" fill="${GOLD}" opacity=".0"/>
  </svg>`;
}
function logoBadgeSVG(h=64){
  return `<svg viewBox="0 0 300 150" style="height:${h}px;width:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mr Nutella depuis 2008">
  <g stroke="#1E1E1E" stroke-width="9" stroke-linecap="round" fill="none">
    <path d="M28 14 Q14 16 15 30 L15 90 Q14 106 30 106"/>
    <path d="M262 12 Q280 13 279 28 L279 52"/>
  </g>
  <text x="40" y="62" font-family="'Baloo 2',cursive" font-weight="800" font-size="58" fill="${GOLD}">Mr</text>
  <g font-family="'Baloo 2',cursive" font-weight="800" font-size="46">
    <text x="40" y="103" fill="#1E1E1E">n</text>
    <text x="68" y="103" fill="${RED}">utella</text>
  </g>
  <g fill="${DARKC}"><path d="M232 30 q10 -12 4 -20 q12 6 2 22 z"/><circle cx="248" cy="18" r="5"/><circle cx="252" cy="34" r="3.6"/></g>
  <rect x="78" y="116" width="150" height="26" rx="4" fill="${GOLD}"/>
  <text x="153" y="134" text-anchor="middle" font-family="Poppins,sans-serif" font-weight="600" font-size="15" fill="#fff" letter-spacing="2">DEPUIS 2008</text>
  </svg>`;
}

/* Food icons — flat, rounded, brand palette */
const ICONS = {
  crepe:`<svg viewBox="0 0 96 96"><path d="M10 64 L86 30 L86 66 Q86 74 78 74 L18 74 Q10 74 10 64Z" fill="#F2C879"/><path d="M10 64 L86 30 L86 40 L14 68Z" fill="#E0AC55"/><path d="M30 58 q6 -3 10 1 q5 6 -1 9 q-7 3 -10 -2 q-3 -5 1 -8z" fill="${CH2}"/><path d="M52 48 q5 -2 8 1 q4 5 -1 8 q-6 2 -9 -2 q-2 -4 2 -7z" fill="${CH2}"/><circle cx="70" cy="42" r="4.5" fill="${RED}"/><circle cx="26" cy="70" r="3.5" fill="${RED}"/><path d="M40 36 q8 -8 18 -4" stroke="${CH2}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  gaufre:`<svg viewBox="0 0 96 96"><rect x="14" y="14" width="68" height="68" rx="16" fill="#E8B04B"/><g stroke="#C98F2E" stroke-width="5" stroke-linecap="round"><path d="M36 18 V78 M60 18 V78 M18 36 H78 M18 60 H78"/></g><path d="M20 22 Q48 8 76 22 L76 34 Q48 22 20 34 Z" fill="${CH2}"/><circle cx="70" cy="70" r="7" fill="${RED}"/><path d="M70 64 q-1 -4 3 -6" stroke="#3f7d2c" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  eskimo:`<svg viewBox="0 0 96 96"><rect x="26" y="10" width="44" height="60" rx="20" fill="#E8B04B"/><g stroke="#C98F2E" stroke-width="4"><path d="M40 14 V66 M56 14 V66 M30 30 H66 M30 48 H66"/></g><path d="M26 30 Q48 16 70 30 L70 44 Q48 32 26 44Z" fill="${CH2}"/><rect x="43" y="68" width="10" height="20" rx="5" fill="#D9A05B"/></svg>`,
  bubble:`<svg viewBox="0 0 96 96"><path d="M24 44 L48 90 L72 44 Z" fill="#F2C879"/><g fill="#E8B04B"><circle cx="34" cy="38" r="9"/><circle cx="52" cy="34" r="9"/><circle cx="68" cy="40" r="8"/><circle cx="43" cy="50" r="8.5"/><circle cx="60" cy="50" r="8"/></g><circle cx="46" cy="22" r="9" fill="#F7E1EE"/><circle cx="60" cy="18" r="7" fill="${CH2}"/><circle cx="33" cy="24" r="6" fill="${RED}"/><path d="M48 60 q4 8 0 14" stroke="${CH2}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  pancake:`<svg viewBox="0 0 96 96"><ellipse cx="48" cy="72" rx="36" ry="10" fill="#D9A05B"/><rect x="14" y="52" width="68" height="18" rx="9" fill="#E8B04B"/><rect x="16" y="40" width="64" height="16" rx="8" fill="#F2C879"/><rect x="18" y="28" width="60" height="16" rx="8" fill="#E8B04B"/><path d="M24 30 Q48 16 72 30 Q74 40 66 40 Q60 46 52 40 Q46 48 38 40 Q30 46 26 38 Q22 34 24 30Z" fill="${CH2}"/><circle cx="48" cy="18" r="6" fill="${RED}"/></svg>`,
  mini:`<svg viewBox="0 0 96 96"><g fill="#F2C879" stroke="#E0AC55" stroke-width="3"><circle cx="30" cy="34" r="16"/><circle cx="66" cy="34" r="16"/><circle cx="30" cy="68" r="16"/><circle cx="66" cy="68" r="16"/></g><circle cx="30" cy="34" r="7" fill="${CH2}"/><circle cx="66" cy="68" r="7" fill="${CH2}"/><circle cx="66" cy="34" r="6" fill="${RED}"/><circle cx="30" cy="68" r="6" fill="${GOLD}"/></svg>`,
  sundae:`<svg viewBox="0 0 96 96"><path d="M28 42 L68 42 L60 88 L36 88 Z" fill="#fff" stroke="#E9DECF" stroke-width="3"/><path d="M48 10 q14 2 12 14 q10 0 8 10 q-2 8 -20 8 q-18 0 -20 -8 q-2 -10 8 -10 q-2 -12 12 -14z" fill="#FDF6EC" stroke="#E9DECF" stroke-width="3"/><path d="M34 30 q14 8 28 0 l-2 10 q-12 6 -24 0z" fill="${CH2}"/><circle cx="48" cy="12" r="6" fill="${RED}"/><path d="M42 56 h12 M40 66 h16" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/></svg>`,
  smoothie:`<svg viewBox="0 0 96 96"><path d="M30 26 L66 26 L60 88 L36 88 Z" fill="#FFDCA8" stroke="#F2B95C" stroke-width="3"/><path d="M31 40 L65 40 L60 88 L36 88 Z" fill="#FF9F5A"/><rect x="26" y="20" width="44" height="8" rx="4" fill="${GOLD}"/><rect x="50" y="2" width="6" height="26" rx="3" fill="${RED}" transform="rotate(8 53 15)"/><circle cx="34" cy="14" r="6" fill="#FF7043"/><path d="M34 8 q0 -5 5 -6" stroke="#3f7d2c" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  mojito:`<svg viewBox="0 0 96 96"><path d="M32 18 L64 18 L60 88 L36 88 Z" fill="#DFF5E1" stroke="#B8E0BE" stroke-width="3"/><path d="M33 34 L63 34 L60 88 L36 88 Z" fill="#A8DDB0"/><circle cx="44" cy="46" r="5" fill="#fff" opacity=".8"/><circle cx="54" cy="60" r="5" fill="#fff" opacity=".8"/><circle cx="44" cy="72" r="4" fill="#fff" opacity=".8"/><path d="M56 6 L46 22" stroke="${RED}" stroke-width="5" stroke-linecap="round"/><path d="M60 24 q6 -8 14 -6 q-2 9 -12 10z" fill="#3f7d2c"/><path d="M38 24 q-2 -8 4 -12" stroke="#3f7d2c" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  milkshake:`<svg viewBox="0 0 96 96"><path d="M30 34 L66 34 L59 88 L37 88 Z" fill="#EBD1BC" stroke="#D9B394" stroke-width="3"/><path d="M28 26 q20 -14 40 0 q4 8 -4 10 q-6 5 -12 1 q-6 6 -12 0 q-7 4 -11 -1 q-6 -3 -1 -10z" fill="#FDF6EC" stroke="#E9DECF" stroke-width="3"/><rect x="52" y="2" width="6" height="30" rx="3" fill="${RED}" transform="rotate(10 55 17)"/><circle cx="42" cy="18" r="6" fill="${RED}"/><path d="M40 48 h14 M38 60 h16 M40 72 h12" stroke="${CH2}" stroke-width="4" stroke-linecap="round" opacity=".55"/></svg>`,
  coffee:`<svg viewBox="0 0 96 96"><path d="M20 38 L68 38 L64 82 Q63 88 56 88 L32 88 Q25 88 24 82 Z" fill="#fff" stroke="#E9DECF" stroke-width="3"/><path d="M22 46 L66 46 L64 60 L24 60Z" fill="#8a5a34"/><path d="M68 44 q14 0 12 14 q-2 12 -16 10" fill="none" stroke="#E9DECF" stroke-width="5"/><g stroke="#C9A88C" stroke-width="4" stroke-linecap="round" fill="none"><path d="M36 16 q4 6 0 12"/><path d="M50 12 q4 7 0 14"/></g></svg>`,
  box:`<svg viewBox="0 0 96 96"><rect x="12" y="36" width="72" height="48" rx="8" fill="${GOLD}"/><rect x="12" y="36" width="72" height="14" fill="#DD9E00"/><path d="M12 40 L48 20 L84 40" fill="none" stroke="${CH}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="54" width="36" height="22" rx="5" fill="${CREAM}"/><text x="48" y="70" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="15" fill="${RED}">Mr</text></svg>`,
  splash:`<svg viewBox="0 0 96 96"><path d="M14 60 q18 -26 40 -18 q24 8 28 -10 q4 22 -16 26 q-22 4 -30 14 q-8 10 -22 -12z" fill="${CH2}"/><circle cx="76" cy="24" r="6" fill="${CH2}"/><circle cx="86" cy="40" r="4" fill="${CH2}"/><circle cx="22" cy="42" r="4.5" fill="${CH2}"/></svg>`,
  fraise:`<svg viewBox="0 0 96 96"><path d="M48 88 Q18 70 20 44 Q22 24 48 26 Q74 24 76 44 Q78 70 48 88Z" fill="${RED}"/><path d="M48 26 q-4 -10 6 -14 q-2 8 4 10 q8 -4 12 4 q-8 2 -10 8 q-6 -6 -12 -8z" fill="#3f7d2c"/><g fill="#FFD9DC"><circle cx="38" cy="46" r="2.5"/><circle cx="56" cy="42" r="2.5"/><circle cx="48" cy="58" r="2.5"/><circle cx="36" cy="66" r="2.5"/><circle cx="60" cy="62" r="2.5"/></g></svg>`,
  pistache:`<svg viewBox="0 0 96 96"><ellipse cx="48" cy="52" rx="26" ry="34" fill="#D9C49A"/><path d="M48 22 Q66 40 60 78 Q54 86 48 86 Q42 86 36 78 Q30 40 48 22Z" fill="#93c47d"/><path d="M48 30 Q58 46 54 74" stroke="#6da054" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  cream:`<svg viewBox="0 0 96 96"><path d="M48 8 q16 4 12 18 q12 2 8 14 q-3 10 -14 8 q-2 10 -12 10 q-10 0 -12 -10 q-11 2 -14 -8 q-4 -12 8 -14 q-4 -14 12 -18z" fill="#FDF6EC" stroke="#E9DECF" stroke-width="3"/><path d="M34 66 h28 l-4 22 h-20z" fill="#F2C879"/></svg>`,
  nutellaJar:`<svg viewBox="0 0 96 96"><path d="M24 30 L72 30 L70 84 Q70 90 62 90 L34 90 Q26 90 26 84 Z" fill="#F5EFE6"/><path d="M25 44 L71 44 L70 76 L26 76Z" fill="${CH2}"/><rect x="22" y="16" width="52" height="14" rx="4" fill="#fff" stroke="#DDD" stroke-width="2"/><rect x="30" y="50" width="36" height="18" rx="3" fill="#fff"/><text x="48" y="63" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="12"><tspan fill="#1E1E1E">n</tspan><tspan fill="${RED}">utella</tspan></text></svg>`,
  choco:`<svg viewBox="0 0 96 96"><rect x="16" y="16" width="64" height="64" rx="10" fill="${CH2}"/><g fill="${CH}" opacity=".8"><rect x="24" y="24" width="22" height="22" rx="4"/><rect x="50" y="24" width="22" height="22" rx="4"/><rect x="24" y="50" width="22" height="22" rx="4"/><rect x="50" y="50" width="22" height="22" rx="4"/></g><path d="M16 30 Q30 20 44 28 L44 16 L16 16Z" fill="#8a5a34" opacity=".35"/></svg>`
};

function icon(name, size){
  const s = size ? `width:${size}px;height:${size}px` : "";
  return `<span class="ic" style="${s}">${ICONS[name]||ICONS.crepe}</span>`;
}

/* Drip divider */
function dripSVG(color){
  return `<svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="${color}" d="M0,90 L0,25 Q30,5 60,22 Q80,60 100,30 Q130,0 170,18 Q190,75 215,35 Q240,8 280,20 Q300,50 330,28 Q370,2 410,18 Q430,85 460,40 Q490,10 530,22 Q550,55 580,30 Q620,5 660,20 Q680,70 710,35 Q740,8 780,18 Q800,48 830,28 Q870,3 910,18 Q930,80 960,40 Q990,12 1030,22 Q1050,55 1080,30 Q1120,5 1160,20 Q1180,68 1210,35 Q1240,10 1280,20 Q1300,45 1330,28 Q1370,5 1400,20 Q1420,40 1440,25 L1440,90 Z"/></svg>`;
}

/* ---------- Official menu images & lightbox ---------- */
const MENU_IMGS = [
  { src:"assets/menu-welcome.jpg", fr:"Bienvenue chez Mr Nutella", ar:"مرحبا بكم في Mr Nutella" },
  { src:"assets/menu-crepes.jpg", fr:"Crêpes", ar:"كريب" },
  { src:"assets/menu-gaufres.jpg", fr:"Gaufres & Eskimo", ar:"وافل وإسكيمو" },
  { src:"assets/menu-bubble-pancakes.jpg", fr:"Bubble Waffle & Pancakes", ar:"ببل وافل وبان كيك" },
  { src:"assets/menu-sundae-topping.jpg", fr:"Sundae & Toppings", ar:"صنداي والإضافات" },
  { src:"assets/menu-smoothie-mojitos.jpg", fr:"Smoothies & Mojitos", ar:"سموذي وموهيتو" },
  { src:"assets/menu-milkshake-boissons.jpg", fr:"Milkshakes & Boissons", ar:"ميلك شيك ومشروبات" },
  { src:"assets/menu-boxes-dubai.jpg", fr:"Cake Dubai & Boxes", ar:"كيك دبي والبوكسات" }
];
/* Real product photos (Instagram) */
const PHOTOS = [
  { src:"assets/photo-crepe-coeur-fraises.jpg", fr:"Crêpe cœur fraises & chocolat", ar:"كريب قلب بالفراولة والشوكولاتة" },
  { src:"assets/photo-bubble-cornet.jpg", fr:"Bubble cornet gourmand", ar:"ببل كورني معمّر" },
  { src:"assets/photo-crepe-dubai.jpg", fr:"Crêpe Dubai pistache", ar:"كريب دبي بالفستق" },
  { src:"assets/photo-gaufre-dubai.jpg", fr:"Gaufre Dubai", ar:"وافل دبي" },
  { src:"assets/photo-pancakes-pistache.jpg", fr:"Pancakes pistache Ice Berg", ar:"بان كيك فستق آيس بيرغ" },
  { src:"assets/photo-milkshakes.jpg", fr:"Milkshakes chocolat", ar:"ميلك شيك شوكولاتة" },
  { src:"assets/photo-smoothies.jpg", fr:"Smoothies fruités", ar:"سموذي بالفواكه" },
  { src:"assets/photo-crepe-pistachio.jpg", fr:"Crêpe pistachio & Ferrero", ar:"كريب فستق وفيريرو" },
  { src:"assets/photo-crepe-speculoos.jpg", fr:"Crêpe speculoos", ar:"كريب سبيكولوس" },
  { src:"assets/photo-crepe-lotus.jpg", fr:"Crêpe Lotus chocolat blanc", ar:"كريب لوتس بالشوكولاتة البيضاء" },
  { src:"assets/photo-crepe-roulee.jpg", fr:"Crêpe roulée banane-fraise", ar:"كريب ملفوف بالموز والفراولة" },
  { src:"assets/photo-crepe-chocolat.jpg", fr:"Crêpe chocolat crunchy", ar:"كريب شوكولاتة كرانشي" },
  { src:"assets/photo-gaufre-fraises.jpg", fr:"Gaufre fraises & chantilly", ar:"وافل فراولة وشانتيي" },
  { src:"assets/photo-gaufre-blanche.jpg", fr:"Gaufre Mont Blanc", ar:"وافل مون بلون" },
  { src:"assets/photo-gaufre-kinder.jpg", fr:"Gaufre Kinder", ar:"وافل كيندر" },
  { src:"assets/photo-gaufre-pistache.jpg", fr:"Gaufre choco-pistache", ar:"وافل شوكولاتة وفستق" },
  { src:"assets/photo-gaufres-sticks.jpg", fr:"Sticks gourmands assortis", ar:"ستيكس معسلين متنوعين" }
];
let lbIndex = 0, LB_LIST = MENU_IMGS;
function initLightbox(){
  if(document.getElementById("lightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.id = "lightbox";
  lb.innerHTML = `<button class="lb-close" onclick="closeLB()" aria-label="Fermer">✕</button>
    <button class="lb-nav lb-prev" onclick="navLB(-1)" aria-label="Précédent">‹</button>
    <img id="lbImg" alt="Menu Mr Nutella">
    <button class="lb-nav lb-next" onclick="navLB(1)" aria-label="Suivant">›</button>`;
  lb.addEventListener("click", e=>{ if(e.target===lb) closeLB(); });
  document.body.appendChild(lb);
  document.addEventListener("keydown", e=>{
    const open = document.getElementById("lightbox").classList.contains("open");
    if(!open) return;
    if(e.key==="Escape") closeLB();
    if(e.key==="ArrowLeft") navLB(-1);
    if(e.key==="ArrowRight") navLB(1);
  });
}
function openLB(i, list){
  LB_LIST = list || MENU_IMGS;
  lbIndex = i;
  document.getElementById("lbImg").src = LB_LIST[lbIndex].src;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLB(){
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function navLB(d){
  lbIndex = (lbIndex + d + LB_LIST.length) % LB_LIST.length;
  document.getElementById("lbImg").src = LB_LIST[lbIndex].src;
}
function renderOmenu(){
  const el = document.getElementById("omenuStrip");
  if(!el) return;
  el.innerHTML = MENU_IMGS.map((m,i)=>`
    <button class="omenu-card" onclick="openLB(${i})">
      <img src="${m.src}" alt="${m.fr}" loading="lazy">
      <span class="cap">${LANG==="ar"?m.ar:m.fr}</span>
    </button>`).join("");
}

/* ---------- WhatsApp ---------- */
function waLink(msg){
  return `https://wa.me/${INFO.phoneRaw}?text=${encodeURIComponent(msg || t("wa_generic"))}`;
}
function orderItem(name, price){
  const msg = `${t("wa_msg")}\n• ${name} — ${price} ${t("da")}`;
  window.open(waLink(msg), "_blank");
}

/* ---------- Shared layout ---------- */
function buildNav(active){
  const links = [
    ["index.html","nav_home"],["menu.html","nav_menu"],["build.html","nav_build"],
    ["boxes.html","nav_boxes"],["gallery.html","nav_gallery"],["about.html","nav_about"],["contact.html","nav_contact"]
  ];
  const el = document.getElementById("navbar");
  const solid = el.dataset.solid === "1";
  el.innerHTML = `<div class="container">
    <a href="index.html" class="nav-logo" aria-label="Mr Nutella"></a>
    <nav class="nav-links" id="navLinks">
      ${links.map(l=>`<a href="${l[0]}" data-i18n="${l[1]}" class="${active===l[0]?'active':''}"></a>`).join("")}
    </nav>
    <div class="nav-cta">
      <button class="lang-btn" onclick="toggleLang()">عربي</button>
      <a class="btn btn-red nav-order" target="_blank" rel="noopener" href="${waLink()}" data-i18n="nav_order"></a>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>`;
  if(solid) el.classList.add("solid");
  const setLogo = ()=>{
    const dark = !solid && !el.classList.contains("scrolled");
    el.querySelector(".nav-logo").innerHTML = logoSVG(44, dark);
  };
  setLogo();
  window.addEventListener("scroll",()=>{
    el.classList.toggle("scrolled", window.scrollY > 40);
    setLogo();
  });
  document.getElementById("burger").addEventListener("click",e=>{
    e.currentTarget.classList.toggle("open");
    document.getElementById("navLinks").classList.toggle("open");
  });
}

function buildFooter(){
  const f = document.getElementById("footer");
  if(!f) return;
  f.innerHTML = `
  <div class="drip top">${dripSVG("#FFF6E9")}</div>
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="foot-logo">${logoSVG(50,true)}</div>
        <p data-i18n="foot_about"></p>
        <div class="socials">
          <a href="${INFO.instagram}" target="_blank" rel="noopener" aria-label="Instagram">📸</a>
          <a href="${INFO.facebook}" target="_blank" rel="noopener" aria-label="Facebook">👍</a>
          <a href="${INFO.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">🎵</a>
          <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>
        </div>
      </div>
      <div>
        <h4 data-i18n="foot_links"></h4>
        <a href="menu.html" data-i18n="nav_menu"></a>
        <a href="build.html" data-i18n="nav_build"></a>
        <a href="boxes.html" data-i18n="nav_boxes"></a>
        <a href="gallery.html" data-i18n="nav_gallery"></a>
        <a href="about.html" data-i18n="nav_about"></a>
        <a href="contact.html" data-i18n="nav_contact"></a>
      </div>
      <div>
        <h4 data-i18n="foot_hours"></h4>
        <ul class="foot-hours">
          <li><span data-i18n="foot_days"></span><span class="da">12:00 – 00:00</span></li>
          <li><span data-i18n="foot_wed"></span><span class="da">12:00 – 23:30</span></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="foot_contact"></h4>
        <p style="direction:ltr">📞 ${INFO.phone}</p>
        <p>📍 <span data-i18n-info="addr">${INFO.address_fr}</span></p>
        <p>✉️ ${INFO.email}</p>
      </div>
    </div>
  </div>
  <div class="copyright">© 2008–2026 Mr Nutella Koléa — <span data-i18n="foot_rights"></span></div>`;
}

function buildWaFloat(){
  const d = document.createElement("a");
  d.className = "wa-float"; d.href = waLink(); d.target = "_blank"; d.rel="noopener";
  d.setAttribute("aria-label","WhatsApp");
  d.textContent = "💬";
  document.body.appendChild(d);
}

/* address swaps with language */
function applyInfoLang(){
  document.querySelectorAll('[data-i18n-info="addr"]').forEach(el=>{
    el.textContent = LANG==="ar" ? INFO.address_ar : INFO.address_fr;
  });
  document.querySelectorAll('[data-i18n-info="hours"]').forEach(el=>{
    el.textContent = LANG==="ar" ? INFO.hours_ar : INFO.hours_fr;
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal(){
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ---------- Counters ---------- */
function initCounters(){
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, suf = el.dataset.suffix||"";
      let cur = 0; const step = Math.max(1, Math.round(target/60));
      const tick = ()=>{ cur = Math.min(target, cur+step); el.textContent = cur.toLocaleString() + suf; if(cur<target) requestAnimationFrame(tick); };
      tick(); io.unobserve(el);
    });
  },{threshold:.4});
  document.querySelectorAll("[data-count]").forEach(el=>io.observe(el));
}

/* ---------- Menu rendering ---------- */
function priceChips(it){
  const da = t("da");
  if(it.p !== undefined) return `<div class="mi-prices"><span class="pchip solo">${it.p} ${da}</span></div>`;
  return `<div class="mi-prices">
    <span class="pchip n">Nutella · ${it.n} ${da}</span>
    <span class="pchip m">El Mordjene · ${it.m} ${da}</span>
  </div>`;
}
function menuItemCard(it, catIcon){
  const name = LANG==="ar" ? it.ar : it.fr;
  const desc = LANG==="ar" ? (it.dar||"") : (it.dfr||"");
  const favKey = it.fr;
  const fav = getFavs().includes(favKey);
  const orderName = it.fr + (it.p!==undefined ? "" : " (Nutella)");
  const orderPrice = it.p !== undefined ? it.p : it.n;
  return `<div class="mi" data-name="${(it.fr+" "+it.ar+" "+(it.dfr||"")).toLowerCase()}">
    ${icon(catIcon,46)}
    <div class="mi-body">
      <h4><span>${name} ${it.star?"⭐":""}</span></h4>
      ${desc?`<p>${desc}</p>`:""}
      ${priceChips(it)}
    </div>
    <button class="fav ${fav?'on':''}" onclick="toggleFav('${favKey.replace(/'/g,"\\'")}',this)" aria-label="Favori">♥</button>
  </div>`;
}
function getFavs(){ try{ return JSON.parse(localStorage.getItem("mn_favs")||"[]"); }catch(e){ return []; } }
function toggleFav(key, btn){
  let f = getFavs();
  if(f.includes(key)) f = f.filter(x=>x!==key); else f.push(key);
  localStorage.setItem("mn_favs", JSON.stringify(f));
  btn.classList.toggle("on");
}

function renderMenu(){
  const wrap = document.getElementById("menuWrap");
  if(!wrap) return;
  const active = wrap.dataset.cat || "all";
  const q = (document.getElementById("menuSearch")?.value || "").trim().toLowerCase();
  let html = "";
  Object.entries(MENU).forEach(([key,cat])=>{
    if(active!=="all" && active!==key) return;
    let items = cat.items;
    if(q) items = items.filter(it=>(it.fr+" "+it.ar+" "+(it.dfr||"")+" "+(it.dar||"")).toLowerCase().includes(q));
    if(!items.length) return;
    html += `<h3 class="cat-title">${icon(cat.icon,38)} ${LANG==="ar"?cat.ar:cat.fr}</h3>
      <div class="menu-grid">${items.map(it=>menuItemCard(it,cat.icon)).join("")}</div>`;
    const note = LANG==="ar" ? cat.note_ar : cat.note_fr;
    if(note && !q) html += `<div class="menu-note"><h4 data-i18n="menu_note_t">${t("menu_note_t")}</h4><p>${note}</p></div>`;
  });
  wrap.innerHTML = html || "";
  document.getElementById("noResults").style.display = html ? "none" : "block";
}

function initMenuPage(){
  const tabsEl = document.getElementById("menuTabs");
  if(!tabsEl) return;
  const cats = Object.entries(MENU);
  const draw = ()=>{
    const active = document.getElementById("menuWrap").dataset.cat || "all";
    tabsEl.innerHTML = `<button class="tab ${active==="all"?"active":""}" data-cat="all">✨ ${t("menu_all")}</button>` +
      cats.map(([k,c])=>`<button class="tab ${active===k?"active":""}" data-cat="${k}">${LANG==="ar"?c.ar:c.fr}</button>`).join("");
    tabsEl.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{
      document.getElementById("menuWrap").dataset.cat = b.dataset.cat;
      draw(); renderMenu();
    }));
  };
  draw(); renderMenu();
  document.getElementById("menuSearch").addEventListener("input", renderMenu);
  document.addEventListener("langchange", ()=>{ draw(); renderMenu(); });
}

/* ---------- Featured ---------- */
const FEATURED = [
  { img:"assets/photo-crepe-dubai.jpg", icn:"crepe", tag:"tag_best", fr:"Crêpe DUBAI", ar:"كريب دبي", dfr:"Nutella + Kunafa + sauce pistache", dar:"نوتيلا + كنافة + صوص فستق", price:800 },
  { img:"assets/photo-crepe-chocolat.jpg", icn:"crepe", tag:"tag_signature", fr:"Crêpe Famous Mr Nutella", ar:"كريب Famous Mr Nutella", dfr:"La surprise signature de la maison", dar:"مفاجأة المحل المميزة", price:700 },
  { img:"assets/photo-bubble-cornet.jpg", icn:"bubble", tag:"tag_new", fr:"Bubble Mix", ar:"ببل ميكس", dfr:"Fruits + supplément + Sundae", dar:"فواكه + إضافة + صنداي", price:900 },
  { img:"assets/photo-gaufre-blanche.jpg", icn:"gaufre", tag:"tag_best", fr:"Gaufre Mont Blanc", ar:"وافل مون بلون", dfr:"Chocolat blanc + Rafaello + Nestlé + fruits", dar:"شوكولاتة بيضاء + رافايلو + نستله + فواكه", price:700 },
  { img:"assets/photo-milkshakes.jpg", icn:"milkshake", tag:"tag_best", fr:"Milkshake Nutella", ar:"ميلك شيك نوتيلا", dfr:"Onctueux, généreux, incontournable", dar:"كريمي، غني، لا يفوَّت", price:500 },
  { img:"assets/photo-pancakes-pistache.jpg", icn:"pancake", tag:"tag_new", fr:"Pancakes Ice Berg", ar:"بان كيك آيس بيرغ", dfr:"Pistache, banane & chocolat blanc", dar:"فستق، موز وشوكولاتة بيضاء", price:750 },
  { icn:"box", tag:"tag_signature", fr:"Box Famille", ar:"بوكس العائلة", dfr:"5 composants + sauces au choix", dar:"5 مكونات + صوصات حسب الاختيار", price:2200 },
  { img:"assets/photo-gaufre-dubai.jpg", icn:"sundae", tag:"tag_new", fr:"Cake Dubai", ar:"كيك دبي", dfr:"Pistache & kunafa — grande boîte", dar:"فستق وكنافة — علبة كبيرة", price:750 }
];
function renderFeatured(){
  const track = document.getElementById("featTrack");
  if(!track) return;
  track.innerHTML = FEATURED.map(f=>`
    <article class="feat-card reveal in">
      <div class="feat-img ${f.img?'photo':''}" style="background:linear-gradient(150deg,var(--cream),var(--cream-2))">
        ${f.img ? `<img src="${f.img}" alt="${f.fr}" loading="lazy">` : ICONS[f.icn]}
        <span class="feat-tag">${t(f.tag)}</span>
      </div>
      <div class="feat-body">
        <h3>${LANG==="ar"?f.ar:f.fr}</h3>
        <p>${LANG==="ar"?f.dar:f.dfr}</p>
        <div class="feat-foot">
          <span class="price">${f.price} <small>${t("da")}</small></span>
          <button class="btn btn-gold" style="padding:.45em 1.1em;font-size:.9rem"
            onclick="orderItem('${f.fr.replace(/'/g,"\\'")}',${f.price})">${t("feat_order")}</button>
        </div>
      </div>
    </article>`).join("");
}
function slideFeat(dir){
  const track = document.getElementById("featTrack");
  track.scrollBy({left: dir * 322 * (document.documentElement.dir==="rtl"?-1:1), behavior:"smooth"});
}

/* ---------- Build Your Dessert ---------- */
const buildState = { base:null, choco:null, fruits:[], tops:[] };

function bOpt(list, sel, multi){
  return list.map(o=>{
    const on = multi ? sel.includes(o.id) : sel === o.id;
    return `<button class="opt ${on?"sel":""}" data-id="${o.id}"><span class="em">${o.em}</span> ${LANG==="ar"?o.ar:o.fr}</button>`;
  }).join("");
}
function renderBuild(){
  const el = document.getElementById("buildSteps");
  if(!el) return;
  el.innerHTML = `
  <div class="bstep reveal in"><h3><span class="num">1</span> ${t("b_step1")}</h3>
    <div class="opt-row" data-step="base">${bOpt(BUILD.bases, buildState.base)}</div></div>
  <div class="bstep reveal in"><h3><span class="num">2</span> ${t("b_step2")}</h3>
    <div class="opt-row" data-step="choco">${bOpt(BUILD.chocolates, buildState.choco)}</div></div>
  <div class="bstep reveal in"><h3><span class="num">3</span> ${t("b_step3")}</h3>
    <div class="opt-row" data-step="fruits">${bOpt(BUILD.fruits, buildState.fruits, true)}</div></div>
  <div class="bstep reveal in"><h3><span class="num">4</span> ${t("b_step4")}</h3>
    <div class="opt-row" data-step="tops">${bOpt(BUILD.toppings, buildState.tops, true)}</div></div>`;
  el.querySelectorAll(".opt-row").forEach(row=>{
    row.querySelectorAll(".opt").forEach(btn=>btn.addEventListener("click",()=>{
      const step = row.dataset.step, id = btn.dataset.id;
      if(step==="base") buildState.base = buildState.base===id ? null : id;
      else if(step==="choco") buildState.choco = buildState.choco===id ? null : id;
      else{
        const arr = step==="fruits" ? buildState.fruits : buildState.tops;
        const i = arr.indexOf(id);
        i>=0 ? arr.splice(i,1) : arr.push(id);
      }
      renderBuild(); renderBuildPreview();
    }));
  });
}
function calcBuild(){
  if(!buildState.base) return 0;
  const base = BUILD.bases.find(b=>b.id===buildState.base);
  const ch = BUILD.chocolates.find(c=>c.id===buildState.choco) || BUILD.chocolates[0];
  let total = (ch.mode==="n" ? base.n : base.m) + ch.extra;
  total += buildState.fruits.length * 100;
  total += buildState.tops.length * 150;
  return total;
}
function buildPreviewSVG(){
  const ch = BUILD.chocolates.find(c=>c.id===buildState.choco);
  const sauce = ch ? ch.color : "#5a3a24";
  const base = buildState.base || "crepe";
  const baseArt = {
    crepe:`<path d="M20 150 L180 90 L180 152 Q180 166 166 166 L34 166 Q20 166 20 150Z" fill="#F2C879"/><path d="M20 150 L180 90 L180 104 L26 158Z" fill="#E0AC55"/>`,
    gaufre:`<rect x="35" y="76" width="130" height="92" rx="18" fill="#E8B04B"/><g stroke="#C98F2E" stroke-width="7" stroke-linecap="round"><path d="M78 82 V162 M122 82 V162 M41 106 H159 M41 138 H159"/></g>`,
    pancake:`<ellipse cx="100" cy="160" rx="76" ry="14" fill="#D9A05B"/><rect x="30" y="122" width="140" height="30" rx="15" fill="#E8B04B"/><rect x="34" y="100" width="132" height="28" rx="14" fill="#F2C879"/><rect x="38" y="80" width="124" height="26" rx="13" fill="#E8B04B"/>`,
    bubble:`<path d="M48 108 L100 196 L152 108Z" fill="#F2C879"/><g fill="#E8B04B"><circle cx="66" cy="96" r="17"/><circle cx="100" cy="88" r="17"/><circle cx="134" cy="96" r="16"/><circle cx="83" cy="118" r="15"/><circle cx="117" cy="118" r="15"/></g>`
  }[base];
  const sauceArt = buildState.choco ? {
    crepe:`<path d="M60 118 Q100 96 150 104 Q158 112 148 118 Q140 130 128 122 Q118 134 106 124 Q94 132 84 124 Q70 130 64 122 Q56 122 60 118Z" fill="${sauce}"/>`,
    gaufre:`<path d="M42 84 Q100 60 158 84 L158 104 Q100 84 42 104Z" fill="${sauce}"/>`,
    pancake:`<path d="M44 82 Q100 58 156 82 Q160 94 150 96 Q142 106 130 98 Q120 110 106 100 Q94 108 84 100 Q72 106 64 96 Q52 96 44 82Z" fill="${sauce}"/>`,
    bubble:`<circle cx="100" cy="70" r="22" fill="${sauce}"/><path d="M100 92 q6 14 0 26" stroke="${sauce}" stroke-width="8" fill="none" stroke-linecap="round"/>`
  }[base] : "";
  const fruitEms = buildState.fruits.map(f=>BUILD.fruits.find(x=>x.id===f).em);
  const topEms = buildState.tops.map(f=>BUILD.toppings.find(x=>x.id===f).em);
  const deco = [...fruitEms, ...topEms].slice(0,8).map((em,i)=>{
    const x = 34 + (i%4)*44, y = i<4 ? 40 : 14;
    return `<text x="${x}" y="${y+16}" font-size="24">${em}</text>`;
  }).join("");
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${baseArt}${sauceArt}${deco}</svg>`;
}
function renderBuildPreview(){
  const cv = document.getElementById("bpCanvas");
  if(!cv) return;
  const sum = document.getElementById("bpSummary");
  const totalEl = document.getElementById("bpTotal");
  if(!buildState.base){
    cv.innerHTML = `<div style="color:var(--muted);font-family:var(--f-head);font-size:1.05rem;padding:30px 10px">${t("b_pick_base")}</div>`;
    sum.innerHTML = ""; totalEl.textContent = "0 " + t("da");
    return;
  }
  cv.innerHTML = buildPreviewSVG();
  const L = k=>LANG==="ar"?k.ar:k.fr;
  const base = BUILD.bases.find(b=>b.id===buildState.base);
  const ch = BUILD.chocolates.find(c=>c.id===buildState.choco);
  const fr = buildState.fruits.map(f=>L(BUILD.fruits.find(x=>x.id===f))).join(", ");
  const tp = buildState.tops.map(f=>L(BUILD.toppings.find(x=>x.id===f))).join(", ");
  sum.innerHTML = `
    <div><b>${t("b_base")}:</b> ${L(base)}</div>
    <div><b>${t("b_choco")}:</b> ${ch?L(ch):t("b_none")}</div>
    <div><b>${t("b_fruits")}:</b> ${fr||t("b_none")}</div>
    <div><b>${t("b_tops")}:</b> ${tp||t("b_none")}</div>`;
  totalEl.textContent = calcBuild() + " " + t("da");
}
function orderBuild(){
  if(!buildState.base) return;
  const base = BUILD.bases.find(b=>b.id===buildState.base);
  const ch = BUILD.chocolates.find(c=>c.id===buildState.choco);
  const fr = buildState.fruits.map(f=>BUILD.fruits.find(x=>x.id===f).fr).join(", ");
  const tp = buildState.tops.map(f=>BUILD.toppings.find(x=>x.id===f).fr).join(", ");
  let msg = `${t("wa_msg")}\n🧇 ${base.fr}`;
  if(ch) msg += `\n🍫 ${ch.fr}`;
  if(fr) msg += `\n🍓 ${fr}`;
  if(tp) msg += `\n✨ ${tp}`;
  msg += `\n💰 ${t("b_total")}: ${calcBuild()} DA`;
  window.open(waLink(msg), "_blank");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  const page = document.body.dataset.page || "";
  buildNav(page);
  buildFooter();
  buildWaFloat();
  document.querySelectorAll(".drip[data-color]").forEach(d=> d.innerHTML = dripSVG(d.dataset.color));
  document.querySelectorAll("[data-icon]").forEach(el=> el.innerHTML = ICONS[el.dataset.icon] || "");
  document.querySelectorAll("[data-logo-badge]").forEach(el=> el.innerHTML = logoBadgeSVG(+el.dataset.logoBadge || 64));
  applyLang(); applyInfoLang();
  initMenuPage();
  renderFeatured();
  renderBuild(); renderBuildPreview();
  initLightbox(); renderOmenu();
  initReveal(); initCounters();
  document.addEventListener("langchange", ()=>{
    applyInfoLang(); renderFeatured(); renderBuild(); renderBuildPreview(); renderMenu(); renderOmenu();
  });
});
