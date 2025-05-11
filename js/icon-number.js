// JavaScript для управления активацией содержимого
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function () {
        // Закрываем все элементы
        document.querySelectorAll('.collapse').forEach(content => {
            content.classList.remove('show');
            content.classList.add('collapse');
        });

        // Открываем текущее содержимое
        const target = this.getAttribute('data-bs-target');
        const targetContent = document.querySelector(target);

        targetContent.classList.remove('collapse');
        targetContent.classList.add('show');
    });
});