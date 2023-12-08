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

// remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// qualifi
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});


//scroll section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// change bg header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Lorsque le défilement est supérieur à 560 hauteur de fenêtre, ajoutez la classe show-scroll à la balise a avec la classe scroll-top
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//dark light mode------------------
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Sujet précédemment sélectionné (si l'utilisateur est sélectionné)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Définir le thème par défaut sur "dark" si aucun thème n'a été sélectionner précédemment
if (!selectedTheme) {
  document.body.classList.add(darkTheme);
}
// On obtient le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// Nous validons si l'utilisateur a préalablement choisi un sujet
if (selectedTheme) {
  // Si la validation est remplie, nous demandons quel était le problème pour savoir si nous avons activé ou désactivé le dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activer/désactiver le thème manuellement avec le bouton
themeButton.addEventListener("click", () => {
  // Ajouter ou supprimer le thème sombre/icône
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Nous enregistrons le thème et l'icône actuelle que l'utilisateur a choisi
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperTestimonial = new Swiper(".testimonial-container", {
  cssMode: true,
  loop: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});


// Filtre des projets
const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    filterItems(filter);
  });
});

function filterItems(filter) {
  items.forEach(item => {
    item.style.display = 'none';
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'block';
    }
  });
}


function copyToClipboard() {
  const codeContent = document.querySelector('.code-container pre code');
  const textArea = document.createElement('textarea');
  textArea.value = codeContent.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  // Ajoutez ici une logique pour afficher un message de confirmation ou mettre à jour le bouton
  alert('Code copié dans le presse-papiers !');
}