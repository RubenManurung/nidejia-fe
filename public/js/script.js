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

// Pilih checkbox dan elemen yang akan dimodifikasi
const checkbox = document.getElementById('check-hamburger');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const navDefault = document.getElementById('navbar-default');

// Tambahkan event listener untuk perubahan pada checkbox
checkbox.addEventListener('change', function () {
  // Jika checkbox dicentang, tambahkan class
  if (checkbox.checked) {
    line1.classList.add('rotate-45', 'translate-y-1.5');
    line2.classList.add('opacity-0');
    line3.classList.add('-rotate-45', '-translate-y-1.5');
    navDefault.classList.remove('hidden')
  } else {
    // Jika checkbox tidak dicentang, hapus class
    line1.classList.remove('rotate-45', 'translate-y-1.5');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-1.5');
    navDefault.classList.add('hidden')
  }
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    // Get the target section based on the href value
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    checkbox.checked = false;
    line1.classList.remove('rotate-45', 'translate-y-1.5');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-1.5');
    navDefault.classList.add('hidden')
  });
});
