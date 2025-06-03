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

  const quoteBox = document.getElementById("quote-box");

  async function loadQuote() {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      quoteBox.classList.remove('show');
      setTimeout(() => {
        quoteBox.innerText = `"${data.content}" — ${data.author}`;
        quoteBox.classList.add('show');
      }, 300);
    } catch {
      quoteBox.innerText = "“Stay curious and keep learning.”";
      quoteBox.classList.add('show');
    }
  }

  loadQuote();
  setInterval(loadQuote, 10000);

// Inisialisasi Swiper untuk bagian proyek
const projectSwiper = new Swiper('.project-swiper', {
  // Optional parameters
  loop: true, // Untuk membuat carousel berputar tak terbatas
  slidesPerView: 1, // Menampilkan 1 slide per tampilan secara default
  spaceBetween: 30, // Jarak antar slide

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Pagination bisa diklik untuk navigasi
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2, // Menampilkan 2 slide saat lebar layar >= 640px
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3, // Menampilkan 3 slide saat lebar layar >= 768px
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4, // Menampilkan 4 slide saat lebar layar >= 1024px
      spaceBetween: 40
    }
  }
});