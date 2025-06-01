const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

// Toggle menu on button click
toggleBtn.onclick = function (e) {
  e.stopPropagation(); // Prevent click from bubbling up
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};

// Close menu on outside click
document.addEventListener('click', function (e) {
  const isClickInsideMenu = dropDownMenu.contains(e.target);
  const isClickOnToggle = toggleBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
  if (dropDownMenu.classList.contains('open')) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});
