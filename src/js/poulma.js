document.addEventListener('DOMContentLoaded', function() {
  // Navbar toggle
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar-nav');

  if (toggler && nav) {
    toggler.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }

  // Modal
  const modal = document.getElementById('myModal');
  const modalBtn = document.getElementById('modalBtn');
  const closeModal = document.getElementsByClassName('close')[0];

  if (modal && modalBtn && closeModal) {
    modalBtn.onclick = function() {
      modal.style.display = 'block';
    }

    closeModal.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }

  // Alert close
  const alertCloseBtns = document.querySelectorAll('.alert .close');

  alertCloseBtns.forEach(btn => {
    btn.onclick = function() {
      const alert = this.parentElement;
      alert.style.display = 'none';
    }
  });

  // Tabs
  const tabs = document.querySelectorAll('.tabs .tab');
  const tabContents = document.querySelectorAll('.tab-content > div');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      tabContents.forEach(content => content.style.display = 'none');
      tabContents[index].style.display = 'block';
    });
  });

  // Set default active tab
  if (tabs.length > 0) {
    tabs[0].classList.add('active');
    tabContents[0].style.display = 'block';
  }

  // Dropdown
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    }
  });
});
