const direction__right = document.getElementById("option__direction--right");
const direction__left = document.getElementById("option__direction--left");
const display__text = document.getElementById("display__text");
const display__area = document.getElementById("display__area");
let i = 15;

document.getElementById("input").oninput = () =>
  (document.getElementById("display__text").innerHTML = document.getElementById(
    "input"
  ).value);

document
  .getElementById("option__speed--right")
  .addEventListener("click", () => changeSpeed(1, "+"));
document
  .getElementById("option__speed--left")
  .addEventListener("click", () => changeSpeed(1, "-"));

direction__right.addEventListener("click", () =>
  changeDirection(direction__right, "right")
);
direction__left.addEventListener("click", () =>
  changeDirection(direction__left, "left")
);

direction__left.addEventListener("click", function () {
  changeDirection(direction__left, "left");
});

document
  .getElementById("option__color--input")
  .addEventListener("change", function () {
    display__text.style.color = this.value;
    testBackgroundColor(
      display__text.style.color,
      display__area.style.backgroundColor
    );
  });

document
  .getElementById("option__background--input")
  .addEventListener("change", function () {
    display__area.style.backgroundColor = this.value;
    testBackgroundColor(
      display__text.style.color,
      display__area.style.backgroundColor
    );
  });

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
  display__text.style.animationDuration = `${i}s`;
}

function changeDirection(btn, dir) {
  removeClass(direction__left, "button__selected");
  removeClass(direction__right, "button__selected");
  addClass(btn, "button__selected");
  display__text.style.animationName = `defilement-${dir}`;
}

function testBackgroundColor(color, background) {
  if (color === background) {
    display__text.style.color = "#ffffff";
    display__area.style.backgroundColor = "#000000";
  }
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
