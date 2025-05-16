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