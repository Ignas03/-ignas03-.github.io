document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    // Priskiriame įvykį mygtukui
    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme'); // Pakeičiame režimą
    });
});
