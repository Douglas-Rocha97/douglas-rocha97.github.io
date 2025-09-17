const carousel = document.querySelector(".carousel-container")
console.log(carousel);
carousel.addEventListener("mouseenter", () => {
  carousel.classList.add("paused")
})

carousel.addEventListener("mouseleave", () => {
  carousel.classList.remove("paused")
})
