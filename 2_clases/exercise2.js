// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
//      Generar el RFC a partir de el nombre, fechaNacimiento y sexo

class Persona {
  constructor(nombre, edad, sexo, peso, altura, mes, dia) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.mes = mes;
    this.dia = dia;
  }

  calculateImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  isOlder() {
    return this.edad >= 18 ? true : false;
  }

  buildRfc() {
    let arrayName = this.getArray(this.nombre);
    let firstName = this.getSubstring(arrayName[0], 0, 1);
    let lastName = this.getSubstring(arrayName[1], 0, 1);
    let bornYear = this.getYearBorn();
    let gender = this.getGender();
    return firstName
      .concat(lastName)
      .concat(bornYear)
      .concat(this.mes)
      .concat(this.dia)
      .concat(gender);
  }

  getArray(string) {
    return string.split(" ");
  }
  getSubstring(string, first, max) {
    return string.substring(first, max);
  }

  getGender() {
    return this.sexo == "M" ? "H" : "F";
  }

  getYearBorn() {
    let year = new Date().getFullYear();
    return year - this.edad;
  }
}

persona = new Persona("Miguel Madrid", 34, "M", 83, 176, 10, 10);
console.log("Tu IMC es --> ", persona.calculateImc());
console.log("Tu RFC es --> ", persona.buildRfc());
