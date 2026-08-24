const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const bairro = document.querySelector('#bairro').value.trim();
  const servico = document.querySelector('#servico').value;
  const obs = document.querySelector('#obs').value.trim();

  let msg = `Olá! Meu nome é ${nome}. Vim pelo site da MS Caçambas e gostaria de pedir um orçamento.\n\n`;
  msg += `📍 Bairro/região: ${bairro}\n`;
  msg += `🏗️ Tipo de serviço: ${servico}`;
  if (obs) msg += `\n📝 Observação: ${obs}`;

  const url = `https://wa.me/5565999738652?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
