let numbers1 = [1, 2, 3];

let numbers2 = [4, 5, 6];

let numbers = [...numbers1, ...numbers2];

const square = (num) => num * num;

const squares = numbers.map(num => num * num);
// console.log(squares); // Output: [1, 4, 9, 16, 25, 36]

function isEven(num) {
    return num % 2 === 0;
  }
// console.log(isEven(4));
// console.log(isEven(7));

//contains only the even squares from the squares array.
const evenSquares = squares.filter(isEven);
// console.log(evenSquares); // Output: [4, 16, 36]

const firstEvenSquare = evenSquares[0];
const secondEvenSquare = evenSquares[1];
// const thirdEvenSquare = evenSquares[2];

console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);
// console.log(`Third even square: ${thirdEvenSquare}`);