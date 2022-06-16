// // // TA for input // // // // TA for output// Type inference works but we arent gonna use t!
const add = (a: number, b: number): number => {
  return (a + b);
}

const subtract = (a: number, b: number): number => {
  return (a - b);
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message);
}

// we only use never when we really never expect anything back
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// destructuring with TA's
const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}