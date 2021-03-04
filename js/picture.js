import {generateRandomObject} from './data.js';

const pictureListElement = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture')
  .querySelector('.picture');

const picture = generateRandomObject();

const pictureListFragment = document.createDocumentFragment('.picture');

picture.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.src').textContent = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(pictureListFragment);