const audio = new Audio();
audio.src = "../work/media/nidohnedi.mp3";

const element = document.querySelector('.gse1');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'flyin', entries[0].isIntersecting );
});

observer.observe( element );

$(function() {
    var header = $(".scrolling");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1000) {
            header.removeClass('scrolling').addClass("stopscrolling");
        } else {
            header.removeClass("stopscrolling").addClass('scrolling');
        }
    });
});

function calcPos() {
  var element = document.getElementById("mainlogisch");
  var top = element.offsetTop;
  console.log(top);
  var change = document.getElementById("scrolling");
  change.style.top = top + "px";
}
calcPos();

document.addEventListener("scroll", listen);

function listen() {
  let element = document.getElementById('binoculars');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < window.innerHeight) {
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
document.addEventListener("scroll", listen2);
function listen2() {
  let element = document.getElementById('noed');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < window.innerHeight) {
      console.log('obere kante sichtbar');
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
document.addEventListener("scroll", listen3);
function listen3() {
  let element = document.getElementById('logik');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < window.innerHeight) {
      console.log('obere kante sichtbar');
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
