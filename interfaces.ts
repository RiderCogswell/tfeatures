// reusable name
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// must have same property names as interface
const oldCivic = {
  name: 'civic',
  year: 2004,
  broken: true
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic)