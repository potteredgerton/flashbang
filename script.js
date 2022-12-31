var background = document.getElementById("background");

black();

function black(speed) {
  background.style.background = "black";
  setTimeout(white, 100)
}

function white(speed) {
  background.style.background = "white";
  setTimeout(black, 100)
}
