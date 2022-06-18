class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
};

// extends allowsthe methods to be passed into the new class through basic inheritance
class Cars extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle();
vehicle.drive()
vehicle.honk()

const carss = new Cars();

carss.drive();
carss.honk()