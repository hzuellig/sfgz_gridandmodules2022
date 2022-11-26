const element = document.querySelector('.gse1');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'flyin', entries[0].isIntersecting );
});

observer.observe( element );

const element2 = document.querySelector('.gse2');
const observer2 = new IntersectionObserver(entries => {
  element.classList.toggle( 'flyin', entries[0].isIntersecting );
});

observer2.observe( element2 );

$(function() {
    var header = $(".scrolling");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('scrolling').addClass("stopscrolling");
        } else {
            header.removeClass("stopscrolling").addClass('scrolling');
        }
    });
});
$('.scrolling').css({
  opacity: function() {
    var elementHeight = $(this).height(),
        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;

    return opacity;
  }
});
$ (document). ready (function (){
$(window). scroll(function (){
header-bg') .css("opacity", 1 - $ (window) .scrollTop)
})
7)
