console.log("AAA Portfolio Loaded");

/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "#000";
  }
  else{
    navbar.style.background = "rgba(0,0,0,0.7)";
  }

});

/* ================= FADE IN EFFECT ================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px) scale(1.02)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px) scale(1)";

  });

});