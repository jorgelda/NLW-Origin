/* abre e fecha qnd clicar nos icones abre e fecha */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* esconder menu ao clicar no mesmo */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Testimonials swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
   #about .image , #about .text,
   #services header, #services .cards, 
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social`,
  { interval: 75 }
)

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function mudarHeaderNoScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior q a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//destaque de seção selecionada
const sections = document.querySelectorAll('main section[id]')
function DestaqueMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Chamando as duas funções do scroll
window.addEventListener('scroll', function () {
  mudarHeaderNoScroll()
  backToTop()
  DestaqueMenu()
})
