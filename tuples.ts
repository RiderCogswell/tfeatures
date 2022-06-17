const drink = {
  color: 'brown', 
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// tuple
// this ordering of elements INSIDE the array in the type annotation is what creates a tuple
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 40];

const carSpecs: [number, number] = [400, 3354];

// objects are better than tuples because they provide more information
const carStats = {
  horsepower: 400,
  weight: 3354
}