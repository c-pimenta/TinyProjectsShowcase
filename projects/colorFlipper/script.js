const button = document.getElementById("button");
const body = document.getElementById("body");
const subtitle = document.getElementById("subtitle1");
const subtitle2 = document.getElementById("subtitle2");
function randomRgb() {
  return Math.floor(Math.random() * 256);
}
button.addEventListener("click", () => {
  button.style.backgroundColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  body.style.backgroundColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  subtitle.textContent = `Background color: ${body.style.backgroundColor}`;
  subtitle2.textContent = `Button color: ${button.style.backgroundColor}`;
});
