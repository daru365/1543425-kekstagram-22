
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


getRandomIntInclusive();

const idRandom = console.log(getRandomIntInclusive(1, 25));

const urlRandom = console.log('photos/' + getRandomIntInclusive(1, 25) + '.jpg');

const description = console.log('Описание фотографии');

const likes = console.log(getRandomIntInclusive(15, 200));

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]	

const names = ['Анна',
	'Матвей',
	'Леонид',
	'Елена',
	'Карл',
]

const comments = [
	{
	idObject: getRandomIntInclusive(),
	avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
	message: messages[_.random(0, messages.length - 1)]
	name: names[_.random(0, names.length - 1)],
	}
]
 

const createObject = () => {
  return {
    idRandom: '',
    urlRandom: '',
    description: '',
    likes: '',
    comments: '',
  };
};

