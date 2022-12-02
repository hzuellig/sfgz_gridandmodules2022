
var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "pause";
  } else {
    audio.pause();
    button.innerHTML = "play";
  }
});