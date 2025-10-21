document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    if (!sidebar || !menuBtn) return; // interrompe se não existir

    // Cria overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
    overlay.style.zIndex = '900';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    // Funções abrir/fechar menu
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }

    // Botão hamburger
    menuBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Botão fechar (se existir)
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    // Overlay fecha menu
    overlay.addEventListener('click', closeSidebar);

    // Fecha menu ao clicar em qualquer link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});
