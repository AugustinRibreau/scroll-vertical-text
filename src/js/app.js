const input = document.getElementById("input");
const speed__right = document.getElementById("option__speed--right");
const speed__left = document.getElementById("option__speed--left");
const direction__right = document.getElementById("option__direction--right");
const direction__left = document.getElementById("option__direction--left");
const display__area = document.getElementById("display__area");
let i = 15;

input.oninput = () => display();

function display() {
  document.getElementById("display__area").innerHTML = input.value;
}

speed__right.addEventListener("click", () => changeSpeed(1, "+"));
speed__left.addEventListener("click", () => changeSpeed(1, "-"));

direction__right.addEventListener("click", () =>
  changeDirection(direction__right, "right")
);
direction__left.addEventListener("click", () =>
  changeDirection(direction__left, "left")
);

function changeSpeed(elem, operator) {
  if (operator === "+") {
    i += elem; // + 1
  } else {
    i -= elem; // -1
  }
  if (i === 0 || i < 0) {
    i = 1; // min 1s
  }
  if (i >= 120) {
    i = 120; // max 120s
  }
  document.getElementById("option__vitesse--text").innerHTML = i + "s";
  display__area.style.animationDuration = `${i}s`;
}

function changeDirection(btn, dir) {
  removeClass(direction__left, "button__selected");
  removeClass(direction__right, "button__selected");
  addClass(btn, "button__selected");
  display__area.style.animationName = `defilement-${dir}`;
}

function removeClass(elem, className) {
  elem.classList.remove(className);
}
function addClass(elem, className) {
  elem.classList.add(className);
}
function replaceClass(elem, oldClass, newClass) {
  elem.classList.replace(oldClass, newClass);
}
