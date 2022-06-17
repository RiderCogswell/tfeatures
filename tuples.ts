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
