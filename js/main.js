// ========== Preloader ==========
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('loaded'), 300);
    setTimeout(() => preloader.style.display = 'none', 800);
  }
});

// ========== Mobile Menu ==========
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-close');

function openMenu() {
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
  menuToggle.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  menuToggle.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeMenu);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeMenu);
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});

// ========== Scroll to Top ==========
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Scroll Animations ==========
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// ========== Active Nav Link ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ========== Resize handler - close menu on desktop ==========
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
    closeMenu();
  }
});

// ========== WhatsApp Form ==========
function sendWhatsApp(e) {
  e.preventDefault();
  const form = e.target.closest('form');
  const name = form.querySelector('#name') ? form.querySelector('#name').value : '';
  const phone = form.querySelector('#phone') ? form.querySelector('#phone').value : '';
  const model = form.querySelector('#model') ? form.querySelector('#model').value : '';
  const service = form.querySelector('#service') ? form.querySelector('#service').value : '';
  const message = form.querySelector('#message') ? form.querySelector('#message').value : '';

  if (!name || !phone || !message) {
    alert('Please fill in your name, phone number, and describe the problem.');
    return;
  }

  let text = 'Hello, I need IFB washing machine repair service.%0A%0A';
  text += 'Name: ' + encodeURIComponent(name) + '%0A';
  text += 'Phone: ' + encodeURIComponent(phone) + '%0A';
  if (model) text += 'Model: ' + encodeURIComponent(model) + '%0A';
  if (service) text += 'Service: ' + encodeURIComponent(service) + '%0A';
  text += 'Problem: ' + encodeURIComponent(message);

  window.open('https://wa.me/918977465791?text=' + text, '_blank');
}
