const slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', showNextSlide);
document.querySelector('.prev-btn').addEventListener('click', () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
});

setInterval(showNextSlide, 5000);
