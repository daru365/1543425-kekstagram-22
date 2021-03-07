import {data} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

const pictureListFragment = document.createDocumentFragment('.picture');

data.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.content.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(pictureListFragment);