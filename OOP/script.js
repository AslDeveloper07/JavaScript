// class Car {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }

//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} endi ${this.speed} km/h tezlikka harakatlanmoqda`);
//     }

//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} tezligi ${this.speed} ga oshdi`);
//     }
//   }

//   const bmw = new Car("BMW", 120);

//   bmw.accelerate();
//   bmw.brake();

// class BMW {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
//     Cars() {
//       this.speed += 10;
//       console.log(`${this.make} tezilgi ${this.speed} ga oshdi`);
//     }
//     brake() {
//       this.speed -= 10;
//       console.log(`${this.make} tezligi ${this.speed} ga pasayfi `);
//     }
//   }

//   const mercedes = new BMW("Mercedes", 300);

//   mercedes.Cars();
//   mercedes.brake();

// class Mashina{

//     constructor(make, speed){
//         this.make=make
//         this.speed=speed

//     }
//     Mashina(){
//         this.speed +=20
//         console.log(`${this.make} tezligi ${this.speed} ga oshdi `);
//     }
//     break(){
//         this.speed-=20
//         console.log(`${this.make} tezligi ${this.speed} ga kamaydi `);

//     }
// }

// const mashina = new Mashina("BMW", 800)
// mashina.Mashina()
// mashina.break()

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} tezlgii ${this.speed} ga oshdi `);
//   }
// }

// const mashina = new Car("Mercedes", 400);

// mashina.accelerate();


// Asosiy klass
class Vehicle {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }

    accelerate() {
      this.speed += 10;
      console.log(`${this.make} ${this.speed} km/h tezlikka yetdi.`);
    }

    brake() {
      this.speed -= 5;
      console.log(`${this.make} sekinlashib ${this.speed} km/h bo‘ldi.`);
    }
  }

  // Vehicle'dan meros olgan Car klassi
  class Car extends Vehicle {
    constructor(make, speed, fuel) {
      super(make, speed); // Vehicle constructor
      this.fuel = fuel;
    }

    refuel() {
      console.log(`${this.make} ga yoqilg‘i quyildi. ${this.fuel} litr mavjud.`);
    }
  }

  // Car'dan meros olgan ElectricCar klassi
  class ElectricCar extends Car {
    constructor(make, speed, fuel, battery) {
      super(make, speed, fuel); // Car constructor
      this.battery = battery;
    }

    chargeBattery() {
      console.log(`${this.make} akkumulyatori ${this.battery}% gacha zaryadlandi.`);
    }

    accelerate() {
      this.speed += 20;
      this.battery -= 1;
      console.log(`${this.make} ${this.speed} km/h bilan ketmoqda. Batareya: ${this.battery}%`);
    }
  }

  // Foydalanish
  const tesla = new ElectricCar("Tesla", 100, 0, 90);

  tesla.accelerate();   // Tesla 120 km/h bilan ketmoqda. Batareya: 89%
  tesla.brake();        // Tesla sekinlashib 115 km/h bo‘ldi.
  tesla.chargeBattery();// Tesla akkumulyatori 89% gacha zaryadlandi.
  tesla.refuel();       // Tesla ga yoqilg‘i quyildi. 0 litr mavjud.
