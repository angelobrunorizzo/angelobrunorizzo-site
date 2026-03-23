const translations = {
  it: {
    site_title: "ANGELO BRUNO RIZZO",
    quote: "“Il mare insegna misura, profondità e prospettiva.”",
    nav_profile: "Profilo",
    nav_interests: "Interessi",
    nav_photography: "Fotografia",
    nav_contacts: "Contatti",
    profile_title: "Profilo",
    profile_p1: "Angelo Bruno RIZZO è nato a Milano il 26 novembre 1966. Laureato in Economia e Commercio (vecchio ordinamento) con tesi in Diritto del Lavoro, lavora nel settore bancario dal 1997.",
    profile_p2: "Appassionato di mare e navigazione, è subacqueo Advanced Diver e possiede patente nautica vela e motore oltre le 12 miglia.",
    profile_p3: "Tra i suoi principali interessi: Marina Militare, geopolitica, fotografia, corsa e lettura. Questo sito raccoglie immagini e percorsi fotografici in uno spazio essenziale, con layout nero pensato per valorizzare la fotografia.",
    interests_title: "Interessi",
    interest_1: "Marina Militare",
    interest_2: "Geopolitica",
    interest_3: "Fotografia",
    interest_4: "Corsa",
    interest_5: "Lettura",
    interest_6: "Mare",
    photo_title: "Fotografia",
    photo_intro: "La cartella <strong>images</strong> è inclusa nello ZIP. Sostituisci i file <strong>foto1.jpg</strong>, <strong>foto2.jpg</strong> e <strong>foto3.jpg</strong> con le tue fotografie mantenendo gli stessi nomi, oppure modifica i nomi nel file index.html.",
    caption_1: "Mare",
    caption_2: "Orizzonte",
    caption_3: "Paesaggio",
    contacts_title: "Contatti",
    email_label: "Email:"
  },
  en: {
    site_title: "ANGELO BRUNO RIZZO",
    quote: "“The sea teaches measure, depth, and perspective.”",
    nav_profile: "Profile",
    nav_interests: "Interests",
    nav_photography: "Photography",
    nav_contacts: "Contacts",
    profile_title: "Profile",
    profile_p1: "Angelo Bruno RIZZO was born in Milan on November 26, 1966. He graduated in Economics and Business with a thesis in Labour Law and has worked in the banking sector since 1997.",
    profile_p2: "Passionate about the sea and navigation, he is an Advanced Diver and holds a sailing and motor boating license beyond 12 nautical miles.",
    profile_p3: "His main interests include the Italian Navy, geopolitics, photography, running, and reading. This website gathers images and photographic paths in an essential space, with a black layout designed to enhance photography.",
    interests_title: "Interests",
    interest_1: "Italian Navy",
    interest_2: "Geopolitics",
    interest_3: "Photography",
    interest_4: "Running",
    interest_5: "Reading",
    interest_6: "Sea",
    photo_title: "Photography",
    photo_intro: "The <strong>images</strong> folder is included in the ZIP file. Replace <strong>foto1.jpg</strong>, <strong>foto2.jpg</strong>, and <strong>foto3.jpg</strong> with your own photographs using the same file names, or edit the file names in index.html.",
    caption_1: "Sea",
    caption_2: "Horizon",
    caption_3: "Landscape",
    contacts_title: "Contacts",
    email_label: "Email:"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.getElementById('btn-it').classList.toggle('active', lang === 'it');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  localStorage.setItem('siteLanguage', lang);
}

document.getElementById('btn-it').addEventListener('click', () => setLanguage('it'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

setLanguage(localStorage.getItem('siteLanguage') || 'it');
