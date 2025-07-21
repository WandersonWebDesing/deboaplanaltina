// Atualiza a navegação com base na rolagem da página
function updateNavigationOnScroll() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-link');

  sections.forEach((section) => {
    const { offsetTop: top, offsetHeight: height, id } = section;

    if (window.scrollY >= top - 80 && window.scrollY < top + height) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === id) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Envio do formulário com UX feedback
function handleFormSubmission(event) {
  event.preventDefault();
  const formData = new FormData(this);

  fetch('https://hooks.zapier.com/hooks/catch/XXXXXXXXX/XXXXXX/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        window.location.href = '/';
      } else {
        throw new Error('Erro ao enviar formulário.');
      }
    })
    .catch((error) => {
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    });
}

// Menu mobile toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Eventos
window.addEventListener('scroll', updateNavigationOnScroll);
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
