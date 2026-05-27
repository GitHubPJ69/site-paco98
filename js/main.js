/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ===== STICKY HEADER ===== */
const header = document.getElementById('header');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
};

window.addEventListener('scroll', onScroll, { passive: true });

/* ===== FADE-IN AU SCROLL ===== */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));

/* ===== FORMULAIRE CONTACT ===== */
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action');

    if (!action || action === '#') {
      e.preventDefault();
      formNote.textContent = 'ℹ️ Formulaire non configuré — connecte Formspree (voir commentaire dans index.html)';
      formNote.className = 'form__note';
      return;
    }

    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    try {
      const data = new FormData(form);
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        formNote.textContent = '✓ Message envoyé ! On te répond rapidement.';
        formNote.className = 'form__note success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formNote.textContent = '✗ Erreur lors de l\'envoi. Réessaie ou écris directement par email.';
      formNote.className = 'form__note error';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Envoyer le message';
    }
  });
}

/* ===== SMOOTH SCROLL pour ancres ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
