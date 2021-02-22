//1. Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Источник - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//2. Функция для проверки максимальной длины строки. 

let lengthCounter = function(checkLine, maxLength) {
  return checkLine.length <= maxLength
}

getRandomIntInclusive();
lengthCounter();