console.log("Portfolio Loaded");
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  projects.forEach(p => {
    const top = p.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      p.style.opacity = 1;
      p.style.transform = "translateY(0)";
    }
  });
});