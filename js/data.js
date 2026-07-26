/* MR NUTELLA — Menu data (from official menu, dual pricing Nutella / El Mordjene)
   n = Nutella price (DA) · m = El Mordjene price (DA) · p = single price */
const MENU = {
  crepes: {
    icon: "crepe",
    fr: "Crêpes", ar: "كريب",
    items: [
      { fr:"Crêpe Simple", ar:"كريب سيمبل", n:400, m:200 },
      { fr:"Crêpe Miel", ar:"كريب بالعسل", n:300, m:300 },
      { fr:"Crêpe Fruit au choix", ar:"كريب بفاكهة حسب الاختيار", dfr:"Banane / Ananas / Pêche / Fraise", dar:"موز / أناناس / خوخ / فراولة", n:500, m:350 },
      { fr:"Crêpe Fruits", ar:"كريب بالفواكه", n:550, m:400 },
      { fr:"Crêpe Triplo", ar:"كريب تريبلو", dfr:"Chocolat blanc + au lait + noir", dar:"شوكولاتة بيضاء + بالحليب + سوداء", n:500, m:400 },
      { fr:"Crêpe Mr Nutella", ar:"كريب Mr Nutella", dfr:"Surprise", dar:"مفاجأة", n:600, m:500, star:true },
      { fr:"Crêpe Famous Mr Nutella", ar:"كريب Famous Mr Nutella", dfr:"Surprise", dar:"مفاجأة", n:700, m:600, star:true },
      { fr:"Crêpe Mont Blanc", ar:"كريب مون بلون", dfr:"Chocolat blanc + Rafaello + Nestlé + fruits au choix", dar:"شوكولاتة بيضاء + رافايلو + نستله + فواكه حسب الاختيار", n:650, m:500 },
      { fr:"Crêpe Crunchy", ar:"كريب كرانشي", dfr:"Chocolat + Ferrero + fruit au choix", dar:"شوكولاتة + فيريرو + فاكهة حسب الاختيار", n:650, m:500 },
      { fr:"Crêpe Speculose", ar:"كريب سبيكولوس", dfr:"Pâte Speculose + biscuits Speculos", dar:"معجون سبيكولوس + بسكويت سبيكولوس", n:650, m:550 },
      { fr:"Crêpe L'Andalouse", ar:"كريب الأندلس", dfr:"Nutella + noix + amandes effilées + fruit au choix", dar:"نوتيلا + جوز + لوز مقطع + فاكهة حسب الاختيار", n:700, m:600 },
      { fr:"Crêpe Pistachio", ar:"كريب بيستاشيو", dfr:"Nutella + pistache + fruit au choix", dar:"نوتيلا + فستق + فاكهة حسب الاختيار", n:700, m:600 },
      { fr:"Crêpe Black & White", ar:"كريب بلاك أند وايت", dfr:"Chocolat blanc et noir + Rafaello + Kinder", dar:"شوكولاتة بيضاء وسوداء + رافايلو + كيندر", n:700, m:500 },
      { fr:"Crêpe Sushi", ar:"كريب سوشي", dfr:"Nutella + banane + noix", dar:"نوتيلا + موز + جوز", n:700, m:550 },
      { fr:"Crêpe Mix avec Sundae", ar:"كريب ميكس مع صنداي", dfr:"Surprise + Sundae au choix", dar:"مفاجأة + صنداي حسب الاختيار", n:850, m:650 },
      { fr:"Crêpe DUBAI", ar:"كريب دبي", dfr:"Nutella + Kunafa + sauce pistache", dar:"نوتيلا + كنافة + صوص فستق", n:800, m:600, star:true }
    ],
    note_fr:"Suppléments 150 DA : Miel, Nutella, Zebib, Noix, Amandes effilées, Chocolat (noir, blanc, au lait, pistache), Oreo, Speculos, Céréales, Ferrero, Rafaello, KitKat, Snickers, Mars, Twix, Milka, Speculose.",
    note_ar:"إضافات 150 دج: عسل، نوتيلا، زبيب، جوز، لوز مقطع، شوكولاتة (سوداء، بيضاء، بالحليب، فستق)، أوريو، سبيكولوس، حبوب، فيريرو، رافايلو، كيت كات، سنيكرز، مارس، تويكس، ميلكا."
  },
  gaufres: {
    icon: "gaufre",
    fr: "Gaufres", ar: "وافل",
    items: [
      { fr:"Gaufre Simple", ar:"وافل سيمبل", n:400, m:250 },
      { fr:"Gaufre Miel", ar:"وافل بالعسل", n:300, m:300 },
      { fr:"Gaufre Fruit au choix", ar:"وافل بفاكهة حسب الاختيار", dfr:"Banane / Ananas / Pêche / Fraise", dar:"موز / أناناس / خوخ / فراولة", n:500, m:350 },
      { fr:"Gaufre Fruits", ar:"وافل بالفواكه", n:550, m:400 },
      { fr:"Gaufre Triplo", ar:"وافل تريبلو", dfr:"Chocolat blanc + au lait + noir", dar:"شوكولاتة بيضاء + بالحليب + سوداء", n:550, m:400 },
      { fr:"Gaufre Mr Nutella", ar:"وافل Mr Nutella", dfr:"Surprise", dar:"مفاجأة", n:600, m:500, star:true },
      { fr:"Gaufre Famous Mr Nutella", ar:"وافل Famous Mr Nutella", dfr:"Surprise", dar:"مفاجأة", n:700, m:600 },
      { fr:"Gaufre Mont Blanc", ar:"وافل مون بلون", dfr:"Chocolat blanc + Rafaello + Nestlé + fruit au choix", dar:"شوكولاتة بيضاء + رافايلو + نستله + فاكهة حسب الاختيار", n:700, m:550 },
      { fr:"Gaufre Crunchy", ar:"وافل كرانشي", dfr:"Chocolat + Ferrero + fruit au choix", dar:"شوكولاتة + فيريرو + فاكهة حسب الاختيار", n:700, m:550 },
      { fr:"Gaufre Speculose", ar:"وافل سبيكولوس", dfr:"Pâte + biscuits Speculos + fruit au choix", dar:"معجون + بسكويت سبيكولوس + فاكهة حسب الاختيار", n:700, m:550 },
      { fr:"Gaufre L'Andalouse", ar:"وافل الأندلس", dfr:"Nutella + noix + amandes effilées + fruit au choix", dar:"نوتيلا + جوز + لوز مقطع + فاكهة حسب الاختيار", n:750, m:600 },
      { fr:"Gaufre Pistachio", ar:"وافل بيستاشيو", dfr:"Nutella + pistache + fruit au choix", dar:"نوتيلا + فستق + فاكهة حسب الاختيار", n:750, m:600 },
      { fr:"Gaufre Black & White", ar:"وافل بلاك أند وايت", dfr:"Chocolat blanc et noir + Rafaello + Kinder", dar:"شوكولاتة بيضاء وسوداء + رافايلو + كيندر", n:750, m:600 },
      { fr:"Gaufre Mix avec Sundae", ar:"وافل ميكس مع صنداي", dfr:"Surprise + Sundae au choix", dar:"مفاجأة + صنداي حسب الاختيار", n:850, m:650 }
    ]
  },
  eskimo: {
    icon: "eskimo",
    fr: "Gaufres Eskimo", ar: "وافل إسكيمو",
    items: [
      { fr:"Eskimo Simple", ar:"إسكيمو سيمبل", n:250, m:150 },
      { fr:"Eskimo Fruits", ar:"إسكيمو بالفواكه", n:300, m:200 },
      { fr:"Eskimo Triplo", ar:"إسكيمو تريبلو", n:300, m:200 },
      { fr:"Eskimo Mr Nutella", ar:"إسكيمو Mr Nutella", n:450, m:350 },
      { fr:"Eskimo Famous Mr Nutella", ar:"إسكيمو Famous Mr Nutella", n:550, m:450 },
      { fr:"Eskimo Ice Berg", ar:"إسكيمو آيس بيرغ", n:550, m:500 }
    ]
  },
  bubble: {
    icon: "bubble",
    fr: "Bubble Waffle", ar: "ببل وافل",
    items: [
      { fr:"Bubble Simple", ar:"ببل سيمبل", n:400, m:250 },
      { fr:"Bubble Miel", ar:"ببل بالعسل", n:350, m:250 },
      { fr:"Bubble Fruits", ar:"ببل بالفواكه", n:550, m:350 },
      { fr:"Bubble Mr Nutella", ar:"ببل Mr Nutella", dfr:"Fruits + 1 supplément", dar:"فواكه + إضافة واحدة", n:650, m:500, star:true },
      { fr:"Bubble Famous Mr Nutella", ar:"ببل Famous Mr Nutella", dfr:"Fruits + 2 suppléments", dar:"فواكه + إضافتان", n:750, m:600 },
      { fr:"Bubble Extra", ar:"ببل إكسترا", dfr:"Fruits + 3 suppléments", dar:"فواكه + 3 إضافات", n:850, m:650 },
      { fr:"Bubble Mix", ar:"ببل ميكس", dfr:"Fruits + 1 supplément + Sundae", dar:"فواكه + إضافة + صنداي", n:900, m:700 }
    ],
    note_fr:"Suppléments 150 DA : Ferrero, Rafaello, KitKat, Snickers, Mars, Twix, Milka, M&M, Speculose, Oreo.",
    note_ar:"إضافات 150 دج: فيريرو، رافايلو، كيت كات، سنيكرز، مارس، تويكس، ميلكا، M&M، سبيكولوس، أوريو."
  },
  pancakes: {
    icon: "pancake",
    fr: "Pancakes", ar: "بان كيك",
    items: [
      { fr:"Pancakes Simple", ar:"بان كيك سيمبل", n:400, m:200 },
      { fr:"Pancakes Miel", ar:"بان كيك بالعسل", n:300, m:300 },
      { fr:"Pancakes Sirop d'érable", ar:"بان كيك بشراب القيقب", n:400, m:400 },
      { fr:"Pancakes Fruits", ar:"بان كيك بالفواكه", n:550, m:350 },
      { fr:"Pancakes Triplo", ar:"بان كيك تريبلو", n:550, m:350 },
      { fr:"Pancakes Mr Nutella", ar:"بان كيك Mr Nutella", n:650, m:450, star:true },
      { fr:"Pancakes Famous Mr", ar:"بان كيك Famous Mr", n:750, m:550 },
      { fr:"Pancakes Ice Berg", ar:"بان كيك آيس بيرغ", n:750, m:650 }
    ]
  },
  mini: {
    icon: "mini",
    fr: "Mini Pancakes", ar: "ميني بان كيك",
    items: [
      { fr:"Mini Pancakes S — Simple", ar:"ميني بان كيك S — سيمبل", dfr:"10 pièces", dar:"10 قطع", n:400, m:300 },
      { fr:"Mini Pancakes S — Fourré", ar:"ميني بان كيك S — محشي", dfr:"10 pièces + fruits", dar:"10 قطع + فواكه", n:500, m:400 },
      { fr:"Mini Pancakes S — Box", ar:"ميني بان كيك S — بوكس", dfr:"10 pièces + 3 suppléments", dar:"10 قطع + 3 إضافات", n:600, m:500 },
      { fr:"Mini Pancakes M — Simple", ar:"ميني بان كيك M — سيمبل", dfr:"15 pièces", dar:"15 قطعة", n:500, m:400 },
      { fr:"Mini Pancakes M — Fourré", ar:"ميني بان كيك M — محشي", dfr:"15 pièces + fruits", dar:"15 قطعة + فواكه", n:650, m:550 },
      { fr:"Mini Pancakes M — Box", ar:"ميني بان كيك M — بوكس", dfr:"15 pièces + 3 suppléments", dar:"15 قطعة + 3 إضافات", n:800, m:700 },
      { fr:"Mini Pancakes L — Simple", ar:"ميني بان كيك L — سيمبل", dfr:"20 pièces", dar:"20 قطعة", n:600, m:500 },
      { fr:"Mini Pancakes L — Fourré", ar:"ميني بان كيك L — محشي", dfr:"20 pièces + fruits", dar:"20 قطعة + فواكه", n:750, m:650 },
      { fr:"Mini Pancakes L — Box", ar:"ميني بان كيك L — بوكس", dfr:"20 pièces + 3 suppléments", dar:"20 قطعة + 3 إضافات", n:900, m:800 }
    ]
  },
  sundae: {
    icon: "sundae",
    fr: "Sundae", ar: "صنداي",
    items: [
      { fr:"Sundae Nature + 1 topping", ar:"صنداي طبيعي + إضافة واحدة", p:350 },
      { fr:"Sundae Nature + 2 toppings", ar:"صنداي طبيعي + إضافتان", p:450 },
      { fr:"Sundae Nature + 3 toppings", ar:"صنداي طبيعي + 3 إضافات", p:500 }
    ],
    note_fr:"Toppings : Nutella, Speculose, Bueno, Oreo, Ferrero Rocher, Rafaello, Caramel onctueux, Caramel fleur de sel, Praliné amandes-noisettes, Praliné pistache, Bounty, Crunch, KitKat, Côte d'Or, Chocolat noir crispy, Caramel crispy, Caramel rouge crispy, Caramel beurre salé, M&M, Chocolat blanc crispy, Cerise, Fruits des bois, Mangue, Framboise, Chouchous (cajou, amandes, noisettes), Chocolat noisette, Nougat, Pépites…",
    note_ar:"الإضافات: نوتيلا، سبيكولوس، بوينو، أوريو، فيريرو روشيه، رافايلو، كراميل، كراميل بالملح، برالين لوز وبندق، برالين فستق، باونتي، كرانش، كيت كات، كوت دور، شوكولاتة سوداء كريسبي، كراميل كريسبي، M&M، شوكولاتة بيضاء كريسبي، كرز، فواكه الغابة، مانجو، توت، تشوتشو (كاجو، لوز، بندق)، نوغا، رقائق شوكولاتة…"
  },
  smoothies: {
    icon: "smoothie",
    fr: "Smoothies", ar: "سموذي",
    items: [
      { fr:"Smoothie Orange", ar:"سموذي برتقال", p:250 },
      { fr:"Smoothie Fraise", ar:"سموذي فراولة", p:250 },
      { fr:"Smoothie Citron", ar:"سموذي ليمون", p:300 },
      { fr:"Smoothie Cocktail", ar:"سموذي كوكتيل", p:300 },
      { fr:"Smoothie Cocktail fruits de saison", ar:"سموذي كوكتيل فواكه الموسم", p:300 },
      { fr:"Smoothie Energize", ar:"سموذي إنرجايز", dfr:"Cajou + miel", dar:"كاجو + عسل", p:400 }
    ]
  },
  mojitos: {
    icon: "mojito",
    fr: "Mojitos", ar: "موهيتو",
    items: [
      { fr:"Mojito Nature", ar:"موهيتو طبيعي", p:350 },
      { fr:"Mojito Fraise", ar:"موهيتو فراولة", p:350 },
      { fr:"Coupe Fruits au chocolat", ar:"كأس فواكه بالشوكولاتة", dfr:"Salade de fruits + sauce chocolat", dar:"سلطة فواكه + صوص شوكولاتة", n:700, m:350 }
    ]
  },
  milkshakes: {
    icon: "milkshake",
    fr: "Milkshakes", ar: "ميلك شيك",
    items: [
      { fr:"Milkshake Chocolat", ar:"ميلك شيك شوكولاتة", p:350 },
      { fr:"Milkshake Nutella", ar:"ميلك شيك نوتيلا", p:500, star:true },
      { fr:"Milkshake Banane Chocolat", ar:"ميلك شيك موز وشوكولاتة", p:450 },
      { fr:"Milkshake Banane Nutella", ar:"ميلك شيك موز ونوتيلا", p:600 },
      { fr:"Milkshake Fraise", ar:"ميلك شيك فراولة", p:400 },
      { fr:"Milkshake Oreo", ar:"ميلك شيك أوريو", p:500 },
      { fr:"Milkshake Kinder", ar:"ميلك شيك كيندر", p:500 },
      { fr:"Milkshake Speculos", ar:"ميلك شيك سبيكولوس", p:500 },
      { fr:"Milkshake Snickers", ar:"ميلك شيك سنيكرز", p:500 }
    ]
  },
  boissons: {
    icon: "coffee",
    fr: "Boissons", ar: "مشروبات",
    items: [
      { fr:"Café", ar:"قهوة", p:100 },
      { fr:"Café Glacé", ar:"قهوة مثلجة", p:250 },
      { fr:"Café au Chocolat", ar:"قهوة بالشوكولاتة", p:250 },
      { fr:"Café au Lait", ar:"قهوة بالحليب", p:150 },
      { fr:"Cappuccino", ar:"كابتشينو", p:150 },
      { fr:"Chocolat chaud", ar:"شوكولاتة ساخنة", p:250 },
      { fr:"Thé", ar:"شاي", p:100 },
      { fr:"Eau (petite)", ar:"ماء (صغير)", p:30 },
      { fr:"Eau (grande)", ar:"ماء (كبير)", p:50 },
      { fr:"Cannette", ar:"مشروب غازي", p:100 }
    ]
  },
  boxes: {
    icon: "box",
    fr: "Boxes & Cake Dubai", ar: "بوكسات وكيك دبي",
    items: [
      { fr:"Cake Dubai — Petite Boîte", ar:"كيك دبي — علبة صغيرة", p:350 },
      { fr:"Cake Dubai — Grande Boîte", ar:"كيك دبي — علبة كبيرة", p:750, star:true },
      { fr:"Box Amis", ar:"بوكس الأصدقاء", dfr:"4 composants au choix : fruits, mini pancakes, gaufres coupées, crêpes roulées + sauces au choix", dar:"4 مكونات حسب الاختيار: فواكه، ميني بان كيك، وافل مقطع، كريب ملفوف + صوصات حسب الاختيار", n:1800, m:1400 },
      { fr:"Box Famille", ar:"بوكس العائلة", dfr:"5 composants : fruits, mini pancakes, gaufres coupées, crêpes roulées, marshmallow + sauces au choix", dar:"5 مكونات: فواكه، ميني بان كيك، وافل مقطع، كريب ملفوف، مارشميلو + صوصات حسب الاختيار", n:2200, m:1800, star:true }
    ]
  }
};

/* Build-Your-Dessert configuration */
const BUILD = {
  bases: [
    { id:"crepe",   fr:"Crêpe",         ar:"كريب",      em:"🥞", n:400, m:200 },
    { id:"gaufre",  fr:"Gaufre",        ar:"وافل",      em:"🧇", n:400, m:250 },
    { id:"pancake", fr:"Pancakes",      ar:"بان كيك",   em:"🥯", n:400, m:200 },
    { id:"bubble",  fr:"Bubble Waffle", ar:"ببل وافل",  em:"🫧", n:400, m:250 }
  ],
  chocolates: [
    { id:"nutella",  fr:"Nutella",        ar:"نوتيلا",          em:"🍫", mode:"n",  extra:0,   color:"#5a3a24" },
    { id:"mordjene", fr:"El Mordjene",    ar:"المرجان",         em:"🥜", mode:"m",  extra:0,   color:"#b5793a" },
    { id:"blanc",    fr:"Chocolat blanc", ar:"شوكولاتة بيضاء",  em:"🤍", mode:"m",  extra:0,   color:"#f3e3c3" },
    { id:"noir",     fr:"Chocolat noir",  ar:"شوكولاتة سوداء",  em:"🖤", mode:"m",  extra:0,   color:"#2a1810" },
    { id:"pistache", fr:"Pistache",       ar:"فستق",            em:"💚", mode:"m",  extra:150, color:"#93c47d" }
  ],
  fruits: [
    { id:"fraise", fr:"Fraise", ar:"فراولة", em:"🍓", price:100 },
    { id:"banane", fr:"Banane", ar:"موز", em:"🍌", price:100 },
    { id:"mangue", fr:"Mangue", ar:"مانجو", em:"🥭", price:100 },
    { id:"kiwi", fr:"Kiwi", ar:"كيوي", em:"🥝", price:100 },
    { id:"ananas", fr:"Ananas", ar:"أناناس", em:"🍍", price:100 },
    { id:"peche", fr:"Pêche", ar:"خوخ", em:"🍑", price:100 }
  ],
  toppings: [
    { id:"kinder", fr:"Kinder", ar:"كيندر", em:"🍬", price:150 },
    { id:"oreo", fr:"Oreo", ar:"أوريو", em:"🍪", price:150 },
    { id:"ferrero", fr:"Ferrero", ar:"فيريرو", em:"🌰", price:150 },
    { id:"lotus", fr:"Speculoos", ar:"سبيكولوس", em:"🧈", price:150 },
    { id:"kitkat", fr:"KitKat", ar:"كيت كات", em:"🍫", price:150 },
    { id:"mm", fr:"M&M's", ar:"M&M's", em:"🔴", price:150 },
    { id:"twix", fr:"Twix", ar:"تويكس", em:"🟤", price:150 },
    { id:"mars", fr:"Mars", ar:"مارس", em:"🟠", price:150 },
    { id:"rafaello", fr:"Rafaello", ar:"رافايلو", em:"⚪", price:150 }
  ]
};

/* Contact / business info */
const INFO = {
  phone: "+213 559 26 47 15",
  phoneRaw: "213559264715",
  address_fr: "Rue Ali Dahmane, Koléa 42400, Tipaza",
  address_ar: "شارع علي دحمان، القليعة 42400، تيبازة",
  hours_fr: "Tous les jours : 12h00 – 00h00 (Mer. jusqu'à 23h30)",
  hours_ar: "كل الأيام: 12:00 – 00:00 (الأربعاء حتى 23:30)",
  email: "mrntellakolea@gmail.com",
  instagram: "https://www.instagram.com/mr_nutella_kolea/",
  facebook: "https://www.facebook.com/mrnutellakolea/",
  tiktok: "https://www.tiktok.com/@mr.nutella.kolea",
  map: "https://www.google.com/maps?q=Mr+Nutella+Kol%C3%A9a+Rue+Ali+Dahmane&output=embed"
};
