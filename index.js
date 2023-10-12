// script.js
const showDropdownsButton = document.getElementById('btn2');
const dropdowns = document.querySelector('.dropdowns');

showDropdownsButton.addEventListener('click', function () {
    if (dropdowns.style.display === 'none' || dropdowns.style.display === '') {
        dropdowns.style.display = 'block';
    } else {
        dropdowns.style.display = 'none';
    }
});



