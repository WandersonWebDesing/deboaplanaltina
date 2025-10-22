document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('main-nav');
    const closeBtn = document.getElementById('close-btn');

    if (!menuToggle || !sidebar) return;

    // Função para abrir/fechar menu
    const toggleMenu = () => sidebar.classList.toggle('active');

    // Abrir menu ao clicar no botão sandwich
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Fechar menu ao clicar no botão de fechar
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.remove('active');
        });
    }

    // Fechar menu clicando fora
    document.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Evitar fechamento ao clicar dentro do sidebar
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Atualizar a página em 40 minutos (2400000ms) se não houver formulários ativos
    const forms = document.querySelectorAll('form');
    const hasActiveForm = Array.from(forms).some(form => form.dataset.active === 'true');

    if (!hasActiveForm) {
        setTimeout(() => location.reload(), 2400000);
    }
});
