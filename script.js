document.addEventListener('DOMContentLoaded', () => {
  const appShell = document.querySelector('.app-shell');
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  if (appShell && window.matchMedia('(max-width: 720px)').matches) {
    appShell.classList.add('sidebar-collapsed');
  }

  const applySidebarIconState = () => {
    if (!sidebarToggle || !appShell) {
      return;
    }

    const isCollapsed = appShell.classList.contains('sidebar-collapsed');
    const icon = sidebarToggle.querySelector('.sidebar-toggle-icon');

    if (icon) {
      icon.textContent = isCollapsed ? '›' : '‹';
    }

    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Expandir menu' : 'Recolher menu');
  };

  if (sidebarToggle && appShell) {
    if (window.matchMedia('(max-width: 720px)').matches) {
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.setAttribute('aria-label', 'Expandir menu');
    }

    applySidebarIconState();

    sidebarToggle.addEventListener('click', () => {
      const isCollapsed = appShell.classList.toggle('sidebar-collapsed');
      if (sidebar) {
        sidebar.setAttribute('aria-label', isCollapsed ? 'Menu recolhido' : 'Menu expandido');
      }
      applySidebarIconState();
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  const viewMap = {
    'dashboard-view': 'Dashboard',
    'clients-view': 'Clientes',
    'partners-view': 'Parceiros',
    'contracts-view': 'Serviços / Contratos',
    'finance-view': 'Financeiro',
    'agenda-view': 'Agenda',
    'tickets-view': 'Chamados',
    'licenses-view': 'Licenças',
    'equipments-view': 'Equipamentos',
    'reports-view': 'Relatórios',
    'nps-view': 'Avaliação NPS',
    'admin-view': 'Administração'
  };

  const pageTitle = document.getElementById('page-title');
  const pageEyebrow = document.querySelector('.page-eyebrow');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.dataset.target;

      navLinks.forEach((item) => item.classList.toggle('active', item === link));

      const views = document.querySelectorAll('.data-view');
      views.forEach((view) => {
        view.classList.toggle('active-view', view.id === targetId);
      });

      const title = viewMap[targetId] || 'Dashboard';
      pageTitle.textContent = title;
      pageEyebrow.textContent = title === 'Dashboard' ? 'Visão Geral' : 'Módulo';

      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.scrollTop = 0;
      }
    });
  });

  const kpiCards = document.querySelectorAll('.kpi-card');
  kpiCards.forEach((card, index) => {
    card.animate([
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 420,
      delay: index * 60,
      easing: 'ease-out'
    });
  });
});
