/*=========================== MENU SHOW & HIDDEN ===========================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=========================== REMOVE MENU MOBILE ===========================*/
const navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu) navMenu.classList.remove("show-menu");
  });
});

/*=========================== QUALIFICATION TABS ===========================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    if (!target) return;

    tabContents.forEach(tc => tc.classList.remove("qualification_active"));
    target.classList.add("qualification_active");

    tabs.forEach(t => t.classList.remove("qualification_active"));
    tab.classList.add("qualification_active");
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");
    const navItem = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

    if (!navItem) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItem.classList.add("active-link");
    } else {
      navItem.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (!scrollUpBtn) return;
  if (window.scrollY >= 300) {
    scrollUpBtn.classList.add("show-scroll");
  } else {
    scrollUpBtn.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK / LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeButton.classList.remove("uil-sun");
      themeButton.classList.add("uil-moon");
    } else {
      themeButton.classList.remove("uil-moon");
      themeButton.classList.add("uil-sun");
    }
  });
}

/*==================== BILINGUAL SWITCH (EN / DE) ====================*/
const langButton = document.getElementById("lang-button");
let currentLang = localStorage.getItem("portfolio-lang") || "en";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-de]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  if (langButton) {
    langButton.textContent = lang === "en" ? "DE" : "EN";
  }
}

applyLanguage(currentLang);

if (langButton) {
  langButton.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "de" : "en";
    localStorage.setItem("portfolio-lang", currentLang);
    applyLanguage(currentLang);
  });
}