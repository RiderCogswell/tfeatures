const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  } 
};

// in destructuring this way we must write out the expected structure of the age property in the profile
const { age }: { age: number } = profile;

const { 
  coords: { lat, lng } 
}: { coords: { lat: number, lng: number } } = profile;