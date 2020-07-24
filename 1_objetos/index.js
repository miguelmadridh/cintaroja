let person = {
  name: "Mauricio",
  lastName: "Ochoa",
  age: 32,
  country: "Mexico",
  isOldThanEighteen: age => (age >= 18 ? true : false),
  sayHello: person => {
    console.log("/******************************************/", "\n");
    console.log("Hola ", person.name, " ", person.lastName);
    console.log("Tu edad es de  : ", person.age);
    console.log("Y eres de :", person.country);
  }
};

// person.sayHello(person);
// console.log(person.isOldThanEighteen(person.age) + "\n");
// console.log("/******************************************/");

let dog = {
  color: "Gray",
  legs: 4,
  isWithHair: legs => (legs > 0 ? true : false),
  name: "Kir"
};
dog.owner = "Miguel";

console.log(dog)

