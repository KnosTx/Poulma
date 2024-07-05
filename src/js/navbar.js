document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar-nav');

  toggler.addEventListener('click', function() {
    nav.classList.toggle('show');
  });
});
