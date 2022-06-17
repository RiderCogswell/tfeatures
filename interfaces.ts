const oldCivic = {
  name: 'civic',
  year: 2004,
  broken: true
};


const printVehicle = (vehicle: { name: string; year: number; broken: boolean  }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic)