var slider = document.getElementById("speed");
var background = document.getElementById("background");
var speed = 1;

slider.oninput = function () {
  speed = this.value;
  black(speed);
}

function black(speed) {
  background.style.background = "black";
  setTimeout(white, 1000)
}

function white(speed) {
  background.style.background = "white";
  setTimeout(black, 1000)
}