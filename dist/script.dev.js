"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('clicker');
  var countDisplay = document.getElementById('count');
  var message = document.getElementById('message');
  var targetCount = 10000000000; // Задана кількість кліків

  var count = 0;
  button.addEventListener('click', function () {
    count++;
    countDisplay.textContent = count;

    if (count === targetCount) {
      message.textContent = 'Твоя чагорода ПОХВАЛА за тест цієї сторінки(я получив всю інфу яка мені била потрібна(жартую))!!!';
    }
  });
});