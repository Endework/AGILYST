document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function (dropdown) {
        const arrow = dropdown.querySelector('.dropdown-arrow');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        arrow.addEventListener('click', function () {
            dropdown.classList.toggle('active');
            menu.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
        });
    });
});


