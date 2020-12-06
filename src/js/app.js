const direction__right = document.getElementById("option__direction--right");
const direction__left = document.getElementById("option__direction--left");
const display__text = document.getElementById("display__text");
const display__area = document.getElementById("display__area");
let i = 15;
let isFullScreen = false;

document.getElementById("input").oninput = () =>
  (document.getElementById("display__text").innerHTML = document.getElementById(
    "input"
  ).value);

document
  .getElementById("option__speed--right")
  .addEventListener("click", () => change_speed(1, "+"));
document
  .getElementById("option__speed--left")
  .addEventListener("click", () => change_speed(1, "-"));

direction__right.addEventListener("click", () =>
  change_direction(direction__right, "right")
);
direction__left.addEventListener("click", () =>
  change_direction(direction__left, "left")
);

direction__left.addEventListener("click", function () {
  change_direction(direction__left, "left");
});

document
  .getElementById("option__color--input")
  .addEventListener("change", function () {
    display__text.style.color = this.value;
    test_background_color(
      display__text.style.color,
      display__area.style.backgroundColor
    );
  });

document
  .getElementById("option__background--input")
  .addEventListener("change", function () {
    document.getElementById(
      "fullscreen_section"
    ).style.backgroundColor = this.value;
    display__area.style.backgroundColor = this.value;
    test_background_color(
      display__text.style.color,
      display__area.style.backgroundColor
    );
  });

function change_speed(elem, operator) {
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
  document.getElementById("option__speed--text").innerHTML = i + "s";
  display__text.style.animationDuration = `${i}s`;
}

document.getElementById("fullscreen").addEventListener("click", () => {
  if (isFullScreen) {
    remove_class(display__text, "full-height-text");
    remove_class(document.getElementById("content"), "d-none");
    remove_class(display__area, "full-height");
    add_class(document.getElementById("display_fullscreen"), "d-none");
    return (isFullScreen = false);
  }
  isFullScreen = true;
  add_class(display__text, "full-height-text");
  add_class(document.getElementById("content"), "d-none");
  add_class(display__area, "full-height");
  remove_class(document.getElementById("display_fullscreen"), "d-none");
});

document
  .getElementById("display_fullscreen")
  .addEventListener("click", () => display__area.requestFullscreen());

function change_direction(btn, dir) {
  remove_class(direction__left, "button__selected");
  remove_class(direction__right, "button__selected");
  add_class(btn, "button__selected");
  display__text.style.animationName = `defilement-${dir}`;
}

function test_background_color(color, background) {
  if (color === background) {
    display__text.style.color = "#ffffff";
    display__area.style.backgroundColor = "#000000";
  }
}

function remove_class(elem, className) {
  elem.classList.remove(className);
}
function add_class(elem, className) {
  elem.classList.add(className);
}
function replace_class(elem, oldClass, newClass) {
  elem.classList.replace(oldClass, newClass);
}
