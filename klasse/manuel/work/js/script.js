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
  if (rect.y > 0 && rect.y < (window.innerHeight - 400)) {
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
document.addEventListener("scroll", listen2);
function listen2() {
  let element = document.getElementById('noed');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < (window.innerHeight - 400)) {
      /*console.log('obere kante sichtbar');
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
document.addEventListener("scroll", listen3);
function listen3() {
  let element = document.getElementById('logik');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < (window.innerHeight - 400)) {
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
document.addEventListener("scroll", listen4);
function listen4() {
  let element = document.getElementById('ohne1');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < (window.innerHeight - 100)) {
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}

document.addEventListener("scroll", listen5);
function listen5() {
  let element = document.getElementById('ohne2');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < (window.innerHeight - 100)) {
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}

document.addEventListener("scroll", listen6);
function listen6() {
  let element = document.getElementById('shitbox');
  let rect = element.getBoundingClientRect();
  if (rect.y > 0 && rect.y < (window.innerHeight - 500)) {
      console.log('Animation 6 sichtbar');
      /* Hier kann die Animation gestartet werden */
     element.style.animationPlayState = "running";
  }
}
