// type inference works here
const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date()];

// when we want an array of arrays holding strings 
const carsByMake: string[][] = []

const cars = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(adevgjhvd);

// help with map/ foreach/ reduce functions
carMakers.map((cars: string): string => {
  return cars.toUpperCase();
});

// flexible types // when arrays tsake multiple types values
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-23');
importantDates.push(new Date())
