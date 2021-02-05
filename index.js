// burger menu

const burgerBtn = document.querySelector(".burger-button");

const burgerWrap = document.querySelector(".burger-menu-wrap");

burgerBtn.addEventListener("click", burgerMenuToggle);

function burgerMenuToggle() {
  burgerWrap.classList.toggle("active");

  burgerBtn.classList.toggle("active");
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width > 767.98) {
    burgerBtn.classList.remove("active");

    burgerWrap.classList.remove("active");
  }
});

// smooth scroll

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav a[href^="#"]'); //#top-nav the id of the div that contain a

  Array.from(links).forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      if (!link.classList.contains("active")) {
        links.forEach(link => link.classList.remove("active"));

        link.classList.add("active");
      }

      let targetId = link.getAttribute("href"),
        targetEl = document.querySelector(targetId),
        targetElTop = Math.floor(targetEl.getBoundingClientRect().top - 100);

      window.scrollBy({
        top: targetElTop,

        behavior: "smooth",
      });

      window.history.pushState("", "", targetId);
    });
  });
});

// Reveal

const revealElements = document.querySelectorAll(".reveal");

const revealItems = [];

const scrollY = window.scrollY;

for (const _element of revealElements) {
  const item = {};

  item.revealed = false;

  item.element = _element;

  const bounding = _element.getBoundingClientRect();

  item.top = bounding.top + scrollY;

  item.height = bounding.height;

  revealItems.push(item);
}

window.addEventListener("resize", () => {
  const scrollY = window.scrollY;

  for (const _item of revealItems) {
    const bounding = _item.element.getBoundingClientRect();

    _item.top = bounding.top + scrollY;

    _item.height = bounding.height;
  }
});

window.addEventListener("scroll", () => {
  const limit = window.scrollY + window.innerHeight;

  for (const _item of revealItems) {
    if (!_item.revealed && limit > _item.top + _item.height * 0.45) {
      _item.revealed = true;

      _item.element.classList.add("revealed");
    }
  }
});

// lazy-load

const lazyLoadElement = document.querySelectorAll(".lazy-load");

for (const element of lazyLoadElement) {
  if (element.complete) {
    window.setTimeout(() => {
      element.classList.add("loaded");
    }, 1000 + Math.random() * 2000);
  }

  element.onload = () => {
    element.classList.add("loaded");
  };
}

// easter eggs

const ouhbtn = document.querySelector(".ouh");

const ouhEgg = false;

const feelOuh = new Audio("./assets/musics/feel_ouh.mp3");

const alertBox = document.querySelector(".alert-msg");

const imgs = document.querySelectorAll("img");

const h1 = document.querySelectorAll("h1");

const h2 = document.querySelectorAll("h2");

const h3 = document.querySelectorAll("h3");

const h4 = document.querySelectorAll("h4");

const li = document.querySelectorAll("li");

const a = document.querySelectorAll("a");

const p = document.querySelectorAll("p");

const yesBtn = document.querySelector(".yes");

const noBtn = document.querySelector(".no");

let played = false;

ouhbtn.addEventListener("click", function () {
  alertBox.style.display = "flex";

  ouhEgg = true;
});

if (ouhEgg) {
  alertBox.style.display = "flex";
}

yesBtn.addEventListener("click", () => {
  if (played) return;

  for (const _element of imgs) {
    _element.setAttribute("src", "./assets/images/ouh.png");
  }

  for (const _element of h1) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of h2) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of h3) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of h4) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of li) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of a) {
    _element.innerHTML = "ouh.";
  }

  for (const _element of p) {
    _element.innerHTML = "ouh.";
  }

  feelOuh.play();

  feelOuh.volume = 0.25;

  played = true;

  alertBox.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alertBox.style.display = "none";
});

if (feelOuh.ended == true) ouhEgg = false;

// typed.js

if (!ouhEgg) {
  new Typed(".dev", {
    startDelay: 300,

    loop: true,

    strings: [
      "Avec des compétences en JavaScript^1000",

      "Avec des compétences en HTML/CSS^1000",

      "Avec des compétences en PHP^1000",
    ],

    typeSpeed: 80,
  });
} else {
  new Typed(".dev", {
    startDelay: 300,

    loop: true,

    strings: [
      "Ouh ouh ouh ouh ouh ouh ouh^300",

      "Ouh ouh ouh ouh ouh ouh ouh^300",

      "Ouh ouh ouh ouh ouh ouh ouh^300",
    ],

    typeSpeed: 80,
  });
}
