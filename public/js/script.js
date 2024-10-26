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