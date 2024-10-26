const swiper = new Swiper(".fraction-slide-carousel", {
  loop: true,
  fraction: true,
  clickable: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".fraction-slide-carousel .swiper-button-next",
    prevEl: ".fraction-slide-carousel .swiper-button-prev",
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});

const navHamburger = document.getElementById("nav-hamburger");
const navHamburgerLine1 = document.getElementById("line1");
const navHamburgerLine2 = document.getElementById("line2");
const navHamburgerLine3 = document.getElementById("line3");
const navbarDefault = document.getElementById("navbar-default");
// navHamburgerLine2.classList.toggle(`block`)

navHamburger.addEventListener("click", () => {
  console.log("CLICK")
  navbarDefault.classList.toggle("hidden");
  // group-hover:translate-y-1.5 group-hover:rotate-45 peer-hover:translate-y-1.5 peer-hover:rotate-45
  // navHamburgerLine1.classList.toggle(`kambing translate-y-1.5 rotate-45`)
  navHamburgerLine1.classList.toggle(`group-hover:translate-y-1.5`)
  navHamburgerLine1.classList.toggle(`peer-hover:translate-y-1.5`)
  navHamburgerLine1.classList.toggle(`group-hover:rotate-45`)
  navHamburgerLine1.classList.toggle(`peer-hover:rotate-45`)
  navHamburgerLine1.classList.toggle(`rotate-45`)


  navHamburgerLine2.classList.toggle(`peer-hover:opacity-0`)
  navHamburgerLine2.classList.toggle(`group-hover:opacity-0`)

  navHamburgerLine3.classList.toggle(`peer-hover:-rotate-45`)
  navHamburgerLine3.classList.toggle(`group-hover:-rotate-45`)
  navHamburgerLine3.classList.toggle(`peer-hover:-translate-y-1.5`)
  navHamburgerLine3.classList.toggle(`group-hover:-translate-y-1.5`)
})
