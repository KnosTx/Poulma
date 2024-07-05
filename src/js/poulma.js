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
});
