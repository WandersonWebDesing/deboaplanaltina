// Função para atualizar a navegação com base na rolagem da página
function updateNavigationOnScroll() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');
    
    sections.forEach((section) => {
        const { offsetTop: top, offsetHeight: height, id } = section;

        if (window.scrollY >= top - 50 && window.scrollY < top + height) {
            links.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Adiciona o listener para o evento de scroll
window.addEventListener('scroll', updateNavigationOnScroll);

// Função para enviar o formulário de contato
function handleFormSubmission(event) {
    event.preventDefault(); // Evita o envio tradicional

    const formData = new FormData(this);

    fetch('https://hooks.zapier.com/hooks/catch/XXXXXXXXX/XXXXXX/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            window.location.href = '/'; // Redireciona para a página de agradecimento
        } else {
            throw new Error('Erro ao enviar formulário.');
        }
    })
    .catch(error => {
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
    });
}

// Adiciona o listener para o envio do formulário
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
