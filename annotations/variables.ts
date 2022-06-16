let apples: number = 5;

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
}