function initSidebarToggle() {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar-toggle');

  if (sidebar && toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  } else {
    console.warn("Sidebar ou botão não encontrado.");
  }
}
