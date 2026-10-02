const images = [
  "../IMAGES/MOVIES/scream.jpg",
  "../IMAGES/CDS/The Great Divide.png",
  "../IMAGES/MOVIES/wolfOfWallStreet.jpg",
  "../IMAGES/CDS/Hades.png",
  "../IMAGES/MOVIES/rambo.jpg",
  "../IMAGES/MOVIES/hacksaw.jpg",
  "../IMAGES/CDS/brat but different.jpg"
];

let startIndex = 0;
let autoSlide; //for the timer 

function renderCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let index = (startIndex + i) % images.length;

    const img = document.createElement("img");
    img.src = images[index];

    carousel.appendChild(img);
  }
}

function startAutoSlide() {
  clearInterval(autoSlide); // makes it so it doesnt double slide etc

  autoSlide = setInterval(() => {
    moveSlide(1, false); // auto move
  }, 5000);
}

function moveSlide(direction, resetTimer = true) {
  startIndex = (startIndex + direction + images.length) % images.length;
  
  renderCarousel();

if (resetTimer) { //if they push a button, then reset
  startAutoSlide();
  }
}
renderCarousel();
startAutoSlide();
