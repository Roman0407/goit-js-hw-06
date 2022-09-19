// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const body = document.querySelector("body");
const buttonInput = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonInput.addEventListener("click", makeMagic);

function makeMagic() {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}