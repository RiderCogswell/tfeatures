class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
};

// extends allowsthe methods to be passed into the new class through basic inheritance
class Cars extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  // can be called even though it is private
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
// wont work because not explicit children
// vehicle.honk()

const carss = new Cars();
// carss.honk()