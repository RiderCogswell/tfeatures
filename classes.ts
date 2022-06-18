class Vehicle {
  // // inititalize color either on next line
  // color: string;

  // public initializes the instance variable of the method
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
};

// extends allowsthe methods to be passed into the new class through basic inheritance
class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    // need super() when making a constructor on a child class
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  // can be called even though it is private
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
// wont work because not explicit children
// vehicle.honk()
console.log(vehicle.color);

// anytime you call carss it is running through the constructor function in the Vehicle class because it is the parent
const carss = new Cars(4, 'red');
// carss.honk()
carss.startDrivingProcess();