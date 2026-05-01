console.log("Portfolio Loaded");

// OPTIONAL: simple hover glow effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 15px #00ffcc";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "none";
  });
});