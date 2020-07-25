let autoRojo = {
  color: "Rojo",
  velocidad: 100,
  ruedas: 4,
  motor: "V6",
  arrancar() {
    console.log(`Run run `);
  },
  frena() {
    console.log(`iiiiiii `);
  },
  dobla() {
    console.log(`Estoy doblando `);
  }
};

class Coche {
  constructor(color, velocidad = 100, ruedas, motor, marca) {
    this.color = color;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.motor = motor || `V8`;
    this.marca = marca || "Audi";
  }

  getColor() {
    return this.color;
  }
  getVelocidad() {
    return this.velocidad;
  }
  getRuedas() {
    return this.ruedas;
  }
  getMotor() {
    return this.motor;
  }

  setColor(color) {
    this.color = color;
  }

  setVelocidad(velocidad) {
    this.velocidad = velocidad;
  }

  setRuedas(ruedas) {
    this.ruedas = ruedas;
  }

  setMotor(motor) {
    this.motor = motor;
  }
}

console.log(autoRojo);

carro = new Coche(`rojo`, undefined, 4);
console.log(carro);
