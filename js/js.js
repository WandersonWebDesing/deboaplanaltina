// Adiciona a classe "active" para a navegação, dependendo da rolagem da página
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var links = document.querySelectorAll('.nav-link');

    sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (window.scrollY >= top - 50 && window.scrollY < top + height) {
            links.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

//contato
<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional
    const formData = new FormData(this);

    fetch('https://hooks.zapier.com/hooks/catch/XXXXXXXXX/XXXXXX/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            window.location.reload(); // Recarrega a página após sucesso
        } else {
            throw new Error('Erro ao enviar formulário.');
        }
    })
    .catch(error => {
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
        window.location.reload(); // Recarrega a página após erro
    });
});
</script>
