// reusable name
// can take complex properties, and can take functions as properties
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string
}

// must have same property names as interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic)