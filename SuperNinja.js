class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 0;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  sayName() {
    return this.nombre;
  }
  showStats() {
    console.log(
      `${this.nombre}, ${this.salud}, ${this.velocidad}, ${this.fuerza}`
    );
  }
  drinkSake() {
    this.salud += 10;
    console.log(`salud: ${this.salud}`);
  }
}
/* const ninja1 = new Ninja("Ichiro");
const nombre = ninja1.sayName();
console.log(nombre);
ninja1.showStats();
ninja1.drinkSake(); */

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.nombre = nombre;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }
  speakWisdom() {
    this.drinkSake();
  }
  showStats() {
    console.log(
      `${this.nombre}, ${this.salud}, ${this.velocidad}, ${this.fuerza}, ${this.sabiduria}`
    );
  }
}
const superSensei = new Sensei("Master Splinter");
const nombreSensei = superSensei.sayName();
console.log(nombreSensei);
superSensei.showStats();
superSensei.speakWisdom();
