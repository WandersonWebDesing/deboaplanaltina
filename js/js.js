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
    .then(response => response.json())
    .then(data => alert('Formulário enviado com sucesso!'))
    .catch(error => alert('Erro ao enviar formulário.'));
});
</script>