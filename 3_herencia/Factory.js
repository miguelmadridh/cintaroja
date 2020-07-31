const Pelicula = require("./Pelicula");
const Documental = require("./Documental");
class Factory {
  constructor(titulo, duracion, horario, precio, aundiencia, type) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.horario = horario;
    this.precio = precio;
    this.audiencia = aundiencia;
    this.type = type;
  }
  createLargometraje() {
    let largometraje;

    if (this.type === "pelicula") {
      largometraje = new Pelicula(
        this.titulo,
        this.duracion,
        this.horario,
        this.precio,
        this.aundiencia
      );
      largometraje.getTitulo();
    } else if (this.type === "documental") {
        largometraje = new Documental(
        this.titulo,
        this.duracion,
        this.horario,
        this.precio,
        this.aundiencia
      );
      largometraje.getTitulo();
      
    }
  }

  getDuracion(){
    return this.duracion;
  }

}

module.exports=Factory;
