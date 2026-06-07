document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img, .home-card img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (!img.classList.contains("zoomable")) return;
    });
  });
});
