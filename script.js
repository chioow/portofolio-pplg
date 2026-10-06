const tombol = document.getElementById('tombol-tema');
const root = document.documentElement;

function terapkan(tema) {
  root.setAttribute('data-tema', tema);
  tombol.textContent = tema === 'gelap' ? '☀️' : '🌙';
}

function ambilTema() {
  try { return localStorage.getItem('tema'); } catch (e) { return null; }
}

function simpanTema(tema) {
  try { localStorage.setItem('tema', tema); } catch (e) {}
}

const awal = ambilTema() ||
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'gelap' : 'terang');
terapkan(awal);

tombol.addEventListener('click', () => {
  const baru = root.getAttribute('data-tema') === 'gelap' ? 'terang' : 'gelap';
  terapkan(baru);
  simpanTema(baru);
});
const tombolBahasa = document.getElementById('tombol-bahasa');

const EN = {
  '.navbar__menu a:nth-child(1)': 'Projects',
  '.navbar__menu a:nth-child(2)': 'Contact',
  '.navbar__menu a:nth-child(3)': 'About Me',

  '.hero__sapaan': 'Hello, I am',
  '.hero__peran': 'RPL Student | Gamer',
  '.hero__deskripsi': 'I am a student interested in web development, web design, and various programming languages.',
  '.tombol-grup .btn--solid': 'View Projects',

  '#tentang .seksi__label': 'Profile',
  '.seksi__judul': 'about me',
  '#tentang .seksi__subjudul': 'Getting to know me and my interests in technology.',
  '.tentang__moto': 'Learn &bull; Create &bull; Innovate',
  '.tentang__judul': 'hello',
  '.tentang p:nth-of-type(2)': 'My name is Muhammad Ibad Alhamdi. I have been interested in the IT world since junior high school.',
  '.tentang p:nth-of-type(3)': 'Besides coding, I also enjoy games and reading fiction, two things that are closely related to the logical and creative thinking I need in programming.',
  '.biodata li:nth-child(1)': '<strong>Name:</strong> Muhammad Ibad Alhamdi',
  '.biodata li:nth-child(2)': '<strong>Major:</strong> Software Engineering',
  '.biodata li:nth-child(3)': '<strong>School:</strong> SMK Krian 1 Sidoarjo',
  '.biodata li:nth-child(4)': '<strong>Interests:</strong> Games, coding, and fiction',

  '#keahlian .seksi__label': 'Skills',
  '#keahlian .seksi__judul': 'My <span>Projects</span>',
  '#keahlian .seksi__subjudul': 'Here are the projects I have worked on.',
  '#keahlian .kartu:nth-child(1) p': 'Built a portfolio website using HTML, CSS, and JS.',
  '#keahlian .kartu:nth-child(2) p': 'Built a simple calculator using flowcharts.',
  '#keahlian .kartu:nth-child(3) p': 'Created a logo using text only, with no other elements allowed.',
  '#keahlian .kartu:nth-child(4) p': 'Built an Excel program for processing sales report data.',
  '#keahlian .kartu:nth-child(5) p': 'Built a simple Java cashier system that calculates items, the total price, and gives a discount for members.',

  '#kontak .seksi__label': 'Get in Touch',
  '#kontak .seksi__judul': 'Contact <span>Me</span>',
  '#kontak .seksi__subjudul': "Let's discuss technology and projects.",
  '.kontak__judul': "Let's Connect",
  '.kontak__teks': 'If you want to discuss a project or just ask a question, feel free to contact me.',
  '.kontak .btn': 'Send Message',
  '.footer p': '&copy; 2026 Muhammad Ibad Alhamdi. Portfolio Mini Project.'
};

// simpan teks asli (Indonesia)
const ID = {};
for (const sel in EN) {
  const el = document.querySelector(sel);
  if (el) ID[sel] = el.innerHTML;
}

/** @param {string} b */
function setBahasa(b) {
  document.documentElement.lang = b;
  for (const sel in EN) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = b === 'en' ? EN[sel] : ID[sel];
  }
  tombolBahasa.textContent = b === 'en' ? 'ID' : 'EN';
  try { localStorage.setItem('bahasa', b); } catch (e) {}
}

let bahasaSekarang = 'id';
try { bahasaSekarang = localStorage.getItem('bahasa') || 'id'; } catch (e) {}
setBahasa(bahasaSekarang);

tombolBahasa.addEventListener('click', () => {
  bahasaSekarang = bahasaSekarang === 'id' ? 'en' : 'id';
  setBahasa(bahasaSekarang);
});
const teksWelcome = "Welcome to my web";
const elTyping = document.getElementById("typing");
let idx = 0, menghapus = false;

function ketik() {
  if (!elTyping) return;
  elTyping.textContent = teksWelcome.slice(0, idx);

  if (!menghapus && idx < teksWelcome.length) {
    idx++;
    setTimeout(ketik, 120);
  } else if (!menghapus) {
    menghapus = true;
    setTimeout(ketik, 1800);
  } else if (idx > 0) {
    idx--;
    setTimeout(ketik, 60);
  } else {
    menghapus = false;
    setTimeout(ketik, 500);
  }
}
ketik();
