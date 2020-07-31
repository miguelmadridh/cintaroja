// ------------------------------------------------------------
// 1. Hacer superclase Maestro y subclases Maestro de Física y
//    Maestro de Música y a cada uno asignarle su materia y
//    calcular su promedio de grupo a partir de calificaciones
//    (puedes usar arreglos). El maestro de física tiene un
//    atributo "antiguedad" que guarda un valor numerico,
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
// ------------------------------------------------------------

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }

  calcularCalificaciones() {
    let sum = this.calificaciones.reduce((x, y) => (x += y));
    let avg = sum / this.calificaciones.length;
    return avg;
  }
}

class Fisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

class Musica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}

fisica = new Fisica("fisica", [9, 8, 7, 9, 8], 12);
musica = new Musica("musica", [9, 8, 10, 9, 8], 34);

console.log(fisica);
console.log(musica);

console.log(fisica.calcularCalificaciones());
console.log(musica.calcularCalificaciones());

// ------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color
//        y capacidad.
//     c. consumoEnergetico debe iniciar con valor de 100
// ------------------------------------------------------------

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.consumoEnergetico = 100;
    this.capacidad = capacidad;
  }
}

// ------------------------------------------------------------
// 3.- Crea una subclase de Electrodomestico llamada Lavadora
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// ------------------------------------------------------------

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
  }
  calcularConsumoEnrgetico() {
    return this.consumoEnergetico * this.carga;
  }
}

lavadora = new Lavadora(1000, "gris", 30, 13);
console.log("Consumo energetico --> ", lavadora.calcularConsumoEnrgetico());
// ------------------------------------------------------------
// 4.- Crear una clase Bebida que herede a dos clases Cerveza
//     y Refresco. Ambas clases deben tener la propiedad
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.
// ------------------------------------------------------------

class Bebida {
  constructor(cantidad) {
    this.cantidad = cantidad;
  }

  getCantidad() {
    return this.cantidad;
  }
  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
}

class Refresco extends Bebida {
  constructor(catidad, azucar) {
    super(catidad);
    this.azucar = azucar;
  }

  getAzucar() {
    return this.azucar;
  }
  setAzucar(azucar) {
    this.azucar = azucar;
  }
}

class Cerveza extends Bebida {
    constructor(catidad, porcentajeAlcohol) {
    super(catidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }

  getPorcentajeAlcohol() {
    return this.porcentajeAlcohol;
  }
  setPorcentajeAlcohol(porcentajeAlcohol) {
    this.porcentajeAlcohol = porcentajeAlcohol;
  }
}
