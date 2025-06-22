class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate(){
    this.speed+=10
    console.log(`${this.make} endi ${this.speed} km/h tezlikka harakatlanmoqda`);
  }

  brake(){
    this.speed-=5
    console.log(`${this.make} tezligi ${this.speed} ga oshdi `);
    
  }
}
