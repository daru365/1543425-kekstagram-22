import {NUMBER, MESSAGES, NAMES} from './util.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomElement = (arr) => arr[getRandomIntInclusive(0, arr.length - 1)];

const generateComments = (n) => {
  const comment = [];

  for (let i = 0; i < n; i++) {
    comment.push({
      id: i,
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES),
      avatar: 'img/avatar' + getRandomIntInclusive(1, 6) +'.svg',
    });
  }

  return comment;
}

const generateRandomObject = (id) => {
  return {
    id,
    url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
    description: 'Описание фото',
    comment: generateComments(getRandomIntInclusive(1, 5)),
  };
};

const generateArray = () => {
  const data = [];

  for (let i = 1; i <= NUMBER; i++) {
    data.push(generateRandomObject(i));
  }

  return data;
}
generateArray();