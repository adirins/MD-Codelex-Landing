const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(e) {
  e.prventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop - 180,
    behavior: 'smooth'
  })
}


//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



const burger = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav')

burger.addEventListener('click', () => {
  const isActive = burger.classList.contains('active')

  if (isActive) {
    burger.classList.remove('active');
    nav.classList.remove('active');
  } else {
    burger.classList.add('active');
    nav.classList.add('active');
  }

})
