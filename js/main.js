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

  resultMatrix[0][0] =
    matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0];
  resultMatrix[0][1] =
    matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1];
  resultMatrix[1][0] =
    matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0];
  resultMatrix[1][1] =
    matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1];

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

/**
 *
 * Functions
 *
 */

function findLongestString(...strings) {
  let longestString = '';

  strings.forEach((string) => {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });

  return longestString;
}

console.log(findLongestString('hi', 'yumyum', 'dream', 'big', 'dreams'));

function findLongestStrings(...strings) {
  let longestStrings = [];
  let greatestLength = '';

  strings.forEach((string) => {
    if (string.length > greatestLength) {
      greatestLength = string.length;
    }
  });
  strings.forEach((string) => {
    if (string.length == greatestLength) {
      longestStrings.push(string);
    }
  });

  return longestStrings;
}

console.log(findLongestStrings('hi', 'yumyum', 'dream', 'big', 'dreams'));

function execute(fn, a) {
  return fn(a);
}

console.log(
  execute(function (a) {
    return a * 5;
  }, 20)
);

/**
 *
 * Recursion
 *
 */

// Write a function fib(n) that a takes an integer n and returns the nth fibonacci number

function fib(n) {
  // base case
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  // call to itself
  return fib(n - 1) + fib(n - 2);
}

/**
 *
 * OOP
 *
 */

function Engine(horsePower, cylinderCount, isTurbo = false) {
  this.horsePower = horsePower;
  this.cylinderCount = cylinderCount;
  this.isTurbo = isTurbo;
}

function Car(make, model, year, engine) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.engine = engine;
}

let v6turbo = new Engine(350, 6, true);
let myCar = new Car('nissan', 'GT-R', 2015, v6turbo);

// in-class exercise is to create these two constructor functions

// class ToDoList
// id: string || number
// name: string
// toDos: array
// addToDo: fn
// removeToDo: fn
// clearCompleted: fn

class ToDoList {
  constructor(id, name, toDos = []) {
    this.id = id;
    this.name = name;
    this.toDos = toDos;
  }

  addToDo(toDo) {
    this.toDos.push(toDo);
  }

  removeToDo(id) {
    this.toDos = this.toDos.filter((toDo) => toDo.id != id);
  }

  clearCompleted() {
    this.toDos = this.toDos.filter((toDo) => !toDo.completed);
  }

  static getNewId() {
    return `list-${Math.random() * 4000}-${Math.random() * 5000}`;
  }
}

// class ToDo
// id: string || number
// description: string
// completed: boolean
// setCompleted(completed): fn

class ToDo {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}

const lists = [];
let toDoList = new ToDoList(1, 'shopping', [
  new ToDo(1, 'bananas', true),
  new ToDo(2, 'eggs'),
]);
lists.push(toDoList);

class Rectangle {
  constructor(id) {
    this._id = id;
  }

  get area() {
    return this.calcArea();
  }

  set area(number) {
    if (number > 0) {
      this._area = number;
    }
  }

  calcArea() {
    return this.height * this.width;
  }
}

let square = new Rectangle();

let area = square.area;

square.area = 45;

function doSomething(params) {
  this.hi = hello;
  console.log(this.document);
}

doSomething();

let someObject = {
  hi: 'hello',
  doSomethingElse: function () {
    this.hi = 'hello again';
    console.log(this.document);
    document.getElementById('sdf');
    console.log(this.hi);
  },
};

someObject.doSomethingElse();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

class Util {
  static newGuid(pre) {
    return `${pre}-${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  }
}

let obj = {
  number: 234,
  string: 'some string',
  object: {
    hi: 'hello',
  },
  array: [0, 4, 2],
  array2: ['a', 'b'],
  boolean: true,
};

let stringObj = JSON.stringify(obj);

localStorage.setItem('obj', stringObj);

let retrievedObject = localStorage.getItem('obj');

let parsedObject = JSON.parse(retrievedObject);

console.log(retrievedObject);
console.log(parsedObject);

/**
 *
 * Async
 *
 */

function capAsync(anArray, callback) {
  setTimeout(function () {
    callback(anArray.toString().toUpperCase().split(','));
  }, Math.random() * 2000 + 1000);
}

const array = ['dream', 'big', 'dreams'];

let newCoolStr = capAsync(array, handleModifiedArray); //not what you think will happen

function handleModifiedArray(modifiedArrayStr) {
  document.getElementById('array3').innerText = modifiedArrayStr;
}

function capAsyncPromise(anArray) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const newArray = anArray.toString().toUpperCase().split(',');
      resolve(newArray);
    }, Math.random() * 2000 + 1000);
  });
  return promise;
}

let promise = capAsyncPromise(array);

promise.then((modifiedArray) => {
  document.getElementById('array5').innerText = modifiedArray;
});

// write an async function that takes an array and a function and it will
// call that function with the array having capitalized the first letter
// of every string in the array

function capFirstLetterAsync(anArray, callback) {
  setTimeout(() => {
    const newArray = anArray.map(
      (string) => string[0].toUpperCase() + string.substring(1)
    );
    callback(newArray);
  }, Math.random() * 2000 + 1000);
}

capFirstLetterAsync(
  array,
  (modifiedArray) =>
    (document.getElementById('array4').innerText = modifiedArray)
);

// take the function above and change it over to use
// a Promise instead

function capFirstLetterAsyncPromise(anArray) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const newArray = anArray.map(
        (string) => string[0].toUpperCase() + string.substring(1)
      );
      resolve(newArray);
    }, Math.random() * 2000 + 1000);
  });
  return promise;
}

let promise2 = capFirstLetterAsyncPromise(array);

promise2.then((modifiedArray) => {
  document.getElementById('array6').innerText = modifiedArray;
});
