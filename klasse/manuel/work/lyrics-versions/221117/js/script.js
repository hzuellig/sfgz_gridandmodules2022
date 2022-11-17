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
