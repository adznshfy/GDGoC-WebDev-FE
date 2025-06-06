AOS.init();

  const revealElements = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  });

  const scrollText = document.querySelector('.scroll-text');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollText.classList.add('hide');
    } else {
      scrollText.classList.remove('hide');
    }
  });

// Inisialisasi Swiper untuk bagian proyek
const projectSwiper = new Swiper('.project-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});