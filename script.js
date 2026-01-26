function showMessage() {
  alert("Thank you for contacting me!");
}

const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});



const contactForm = document.getElementById("contactForm");
const customAlert = document.getElementById("customAlert");
const closeAlert = document.getElementById("closeAlert");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  customAlert.classList.add("show");
  contactForm.reset();
});

closeAlert.addEventListener("click", () => {
  customAlert.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", () => {

  // COUNT PROJECTS
  const projects = document.querySelectorAll(".project-card-img");
  const projectsEl = document.getElementById("projectsCount");

  if (projectsEl) {
    projectsEl.innerText = projects.length + "+";
  }

  // DIPLOMA YEAR
  const timeEl = document.querySelector(".timeline .time");
  const diplomaEl = document.getElementById("diplomaYear");

  if (timeEl && diplomaEl) {
    const year = timeEl.innerText.split("-")[0].trim();
    diplomaEl.innerText = year;
  }

});

let images = [];
let currentIndex = 0;

function openLightbox(imgArray) {
  images = imgArray;
  currentIndex = 0;

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";

  document.body.style.overflow = "auto";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}
const words = [
  "Génie Digital",
  "Intelligence Artificielle",
  "Data & AI",
  "Développement Web"
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 100;

function typeEffect() {
  const text = words[i];
  document.getElementById("typing").innerText =
    text.substring(0, j);

  if (!isDeleting && j < text.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      toggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });


