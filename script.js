document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clicker');
    const countDisplay = document.getElementById('count');
    const message = document.getElementById('message');
    const targetCount = 10000000000;  // Задана кількість кліків
    let count = 0;

    button.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;

        if (count === targetCount) {
            message.textContent = 'Твоя чагорода ПОХВАЛА за тест цієї сторінки(я получив всю інфу яка мені била потрібна(жартую))!!!';
        }
    });
});
