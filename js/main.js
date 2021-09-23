let hello1Elm = document.querySelector('#hello1');
hello1Elm.innerText = "It's Monday";

let str = 'some string';
str = 'some other string';

str = `<div>
         <p>sdfsf</p>
       </div>`;

hello1Elm.innerHTML = str;

// var

var text = 'hello';

// let

let text2 = 'hello2';
text2 = 'hi';

// const

const text3 = 'hello3';
// text3 = 'hi again'; this won't work

let Price = '300';
price = '400';

let something$ = 'hi';

let gross = 5000;
let taxes = 4900;
let bacon = gross - taxes; // = 100 :(
let batman = 'Batman';
let superman = 'Superman';
let badMovie = batman + ' vs ' + superman; // 'Batman vs Superman'
let trickQuestion =
  batman +
  bacon +
  function () {
    return 'j';
  }; // ?

const gameInfo = {
  username: 'localdude7',
  character: 'Dog',
  health: 89,
  bonusLevelUnlocked: false,
  scores: [
    {
      level: 1,
      score: 3050,
      time: 2500,
    },
    {
      level: 2,
      score: 6050,
      time: 3500,
    },
  ],
};

let totalScore = 0;

for (let i = 0; i < gameInfo.scores.length; i++) {
  const score = gameInfo.scores[i].score;
  totalScore = totalScore + score;
}

const usernameElm = document.querySelector('#user');
usernameElm.innerText = `User: ${gameInfo.username}`;

const characterElm = document.querySelector('#character');
characterElm.innerText = `Character: ${gameInfo.character}`;

const healthElm = document.querySelector('#health');
healthElm.innerText = `Current Health: ${gameInfo.health}`;

const totalScoreElm = document.querySelector('#totalScore');
totalScoreElm.innerText = `Score: ${totalScore}`;

console.log(totalScore);

function name(params) {}

let myFunc = () => {};

let list = ['apple', 'orange', 'banana'];

let bigWords = list.filter((fruit) => fruit.length > 5);
// let bigWords = list.filter(function (fruit) {
//     return fruit.length > 5
// });

console.log(Array.from(document.querySelectorAll('.className')));
console.log([...document.querySelectorAll('.className')]);

// ternary

// boolean expression ? true expression : false expression
const time = 8;
const greeting = time > 12 ? 'Good Afternoon' : 'Good Morning';

let greeting1;

if (time > 12) {
  greeting1 = 'Good Afternoon';
} else {
  greeting1 = 'Good Morning';
}
/**
 * Truthy values
 true
 1
 any number other than 0
 any string that is not empty
 an object
 */

/**
 * Falsy values
 * false
 * 0
 * ''
 * undefined
 * null
 *
 */

function fizzBuzz(n) {
  let answer = '';
  if (n % 3 == 0) {
    answer += 'Fizz';
  }
  if (n % 5 == 0) {
    answer += 'Buzz';
  }
  return answer ? answer : n;
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(15));
console.log(fizzBuzz(34));

// switch

let media = 'dvd';
function read(params) {}
function play(params) {}

switch (media) {
  case 'book':
  case 'magazine':
  case 'newspaper':
    read(media);
    break;
  case 'dvd':
  case 'cd':
  case 'blueray':
    play(media);
    break;
  default:
    throw new Error('media not recognized');
}

// in class exercise

function getGreeting(time) {
  if (time >= 0 && time <= 12) {
    return 'Good Morning';
  } else if (time > 12 && time <= 16) {
    return 'Good Afternoon';
  } else if (time > 16 && time <= 19) {
    return 'Good Evening';
  } else if (time > 19 && time <= 24) {
    return 'Good Night';
  }
  return 'That time non-existent in this dimension';
}

console.log(getGreeting(9));
console.log(getGreeting(14));
console.log(getGreeting(19));
console.log(getGreeting(23));

function displayGreeting() {
  const time = document.getElementById('time').value;
  const greeting = getGreeting(time);
  document.getElementById('greeting').innerText = greeting;
}

function displayResult() {
  const numbers1 = document.getElementById('array1').value;
  const numbers2 = document.getElementById('array2').value;

  const array1 = numbers1.split(',');
  const array2 = numbers2.split(',');

  array1.forEach(function (number, index) {
    array1[index] = +number;
  });

  array2.forEach(function (number, index) {
    array2[index] = +number;
  });

  const resultArray = multiplyArrays(array1, array2);

  document.getElementById('resultArray').innerText = resultArray;
}

function multiplyArrays(a1, a2) {
  if (a1.length == a2.length) {
    const resultArray = [];
    for (let i = 0; i < a1.length; i++) {
      const number1 = a1[i];
      const number2 = a2[i];
      resultArray.push(number1 * number2);
    }
    return resultArray;
  }
  return 'Arrays are of different length';
}

function multiplyMatrices(matrixA, matrixB) {
  const resultMatrix = [[], []];

  // dot product

  resultMatrix[0][0] = matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0];
  resultMatrix[0][1] = matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1];
  resultMatrix[1][0] = matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0];
  resultMatrix[1][1] = matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1];

  return resultMatrix;
}

console.log(
  multiplyMatrices(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);
