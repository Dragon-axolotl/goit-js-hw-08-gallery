/* ===== Завдання 1 — debounce (lodash) для слайдера ===== */

const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

const updateImageSize = _.debounce((event) => {
  sliderImage.style.width = `${event.target.value}%`;
}, 200);

sliderInput.addEventListener("input", updateImageSize);

/* ===== Завдання 2 — debounce (lodash) для руху миші ===== */

const box = document.querySelector("#box");

const moveBox = _.debounce((event) => {
  box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}, 100);

document.addEventListener("mousemove", moveBox);