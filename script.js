document.addEventListener('DOMContentLoaded', () => {
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
