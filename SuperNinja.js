class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 0;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName = () => console.log(this.nombre);

  showStats = () =>
    console.log(
      `${this.nombre}, ${this.fuerza}, ${this.velocidad}, ${this.salud}`
    );

  drinkSake = () => {
    this.salud += 10;
    console.log(`salud: ${this.salud}`);
  };
}

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.nombre = nombre;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }
  speakWisdom = () => {
    console.log("Al que madruga Dios le Ayuda!");
    this.drinkSake();
  };
  showStats = () =>
    console.log(
      `Nombre Sensei: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}, Sabiduria: ${this.sabiduria}`
    );
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
