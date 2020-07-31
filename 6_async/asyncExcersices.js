// 1.- Muestra un mensaje en consola mediante un callback.
// La función de orden superior que escribas debe poder mostrar el mensaje como console.warn,
//  console.log, console.info, o cualquier método para pintar en consola del objeto console.

let showMessage = callback => {
  callback();
};

showMessage(() => console.log("Hola"));
// 2.- Crear una función de orden superior que reciba como
//     argumento una variable de cualquier tipo y un callback.
//La función de orden superior debe retornar como resultado,
// mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.

let getType = (callback, value) => callback(value);

let tipo = getType(value => typeof value + " " + value, 2);

console.log(tipo);

// 3.- Crear una función de orden superior que reciba como
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let madeCalculation = (callback, value, valueTwo) => callback(value, valueTwo);

let multiplicacion = madeCalculation(
  (value, valueTwo) => value * valueTwo,
  2,
  3
);
let suma = madeCalculation((value, valueTwo) => value + valueTwo, 2, 3);
let resta = madeCalculation((value, valueTwo) => value - valueTwo, 3, 2);
console.log(madeCalculation((value, valueTwo) => value * valueTwo, 2, 4));
console.log(multiplicacion);
console.log(suma);
console.log(resta);

// 4.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

let transformSString = (callback, value, type) => {
  if (type == "minus") value.toLowerCase();
  else value.toUpperCase();
  callback(value);
};
// transformSString(value => console.log(value), "hola", "minus");
// transformSString(value => console.log(value), "HOLA", "mayus");

// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas)
//     mediante un callback.

let getMinus = (callback, array) => {
  array1 = [];
  for (let i in array) {
    if (callback(array[i])) array1.push(array[i]);
  }
  return array1;
};

arra = getMinus(valor => valor > 120, [120, 80, 200, 100]);

console.log(`Arreglo ${arra}`);



let array= [1,2,3,4,5,6,7];
let i = 0;
let array2 = array.map((numero, indice) => numero + " " + indice);

console.log(array2);