var anzahlKlicks = 0;
console.log(anzahlKlicks);

function countClick(){
  anzahlKlicks = anzahlKlicks + 1;
  console.log(anzahlKlicks);
}
function changeProperty() {
  var element = document.getElementById("circle");
  var elementBackground = element.style.backgroundColor;
  element.style.backgroundColor = "#ff8686";
}
function sleep(){

}

function startAnimation() {
var element = document.getElementById("circle");
element.style.animationPlayState = "running"
sleep(6000);
element.style.animationPlayState = "paused"
}
