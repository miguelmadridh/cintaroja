const Factory = require("./Factory");

class Cine {
  constructor(factory) {
    this.factory = factory;
  }
  reproducir() {
    let factory = this.factory;
    factory.createLargometraje();
    let duracion = factory.getDuracion();
    for (let i = 0; i <= duracion; i++) {
      console.log("reproduciendo  " + factory.type);
    }
  }
}

pelicula = new Cine(new Factory("mom", 5, "22", 50, "r", "pelicula"));
pelicula.reproducir();

pelicula = new Cine(new Factory("mom", 5, "22", 50, "r", "documental"));
pelicula.reproducir();
