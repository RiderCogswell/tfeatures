let apples = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// we will have an array [] of strings which is represented syntactically below.
let colors: string[] = ['red', 'green', 'blue']
// we handle this by stating type first, then how it is given, so an array in this ex.
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false]

// classes
class Car {

}

// when referencing an instance, we must create from a class
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function 
// nasty syntax
              // type annotations to left, funct  to right of =
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use TA's

// 1) function that returns any // AVOID AT ALL COSTS
// whenever you use JSON.parse, it returns an 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cant be inferred // like an or statement
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;  

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // because type inference has a hard time inferring values in times like this, when it can be affected, we add TA's to help it 
    numberAboveZero = numbers[i];
  }
}