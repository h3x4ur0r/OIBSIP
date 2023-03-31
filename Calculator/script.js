let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let equalBtn = document.querySelector(".ans");
let acBtn = document.querySelector(".clear");
let cBtn = document.querySelector(".del");
let perc = document.querySelector(".per");
let sqrt = document.querySelector(".sqrt");
let signs = document.querySelector(".signs");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.innerText;
  });
});
equalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});
cBtn.addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1);
});
acBtn.addEventListener("click", () => {
  display.value = "";
});
perc.addEventListener("click", () => {
  display.value = eval(display.value) / 100;
});
sqrt.addEventListener("click", () => {
  display.value = Math.sqrt(eval(display.value));
});
signs.addEventListener("click", () => {
  if (display.value[0] == "-") {
    display.value = display.value.substring(1, display.value.length);
  } else {
    display.value = "-" + display.value;
  }
});
