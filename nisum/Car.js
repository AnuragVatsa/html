class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return this.speed;
  }
}
const myCar = new Car("BMW", 100);
console.log(myCar.accelerate());