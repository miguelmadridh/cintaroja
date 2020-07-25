// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10 (editado)

class Cuenta {

    
  constructor(titular, cantidad, estado) {
    this.titular = titular;
    this.cantidad = cantidad;
    this.estado = estado;
    this.MAX_VALUE  = 900;
    this.MIN_VALUE  = 10;
    this.MESSAGE_MIN_ACCOUNT = "No puede tener menos de 10 en cuenta ";
    this.MESSAGE_MAX_ACCOUNT = "No puede tener mas de 900 en cuenta";
    
  }

  depositMoney(cantidad) {
    let nuevaCantidad = this.addQuantity(cantidad);
    if (this.isLessThan900(nuevaCantidad)) {
      this.setQuantity(nuevaCantidad);
      this.printAccountAdvice("Nueva cantidad", this.cantidad);
    } else {
      this.substractQuantity(cantidad);
      this.printAccountAdvice(
        this.MESSAGE_MAX_ACCOUNT,
        this.cantidad
      );
    }
  }

  isLessThan900(nuevaCantidad) {
    return nuevaCantidad <= this.MAX_VALUE;
  }

  withdrawAccount(cantidad) {
    let nuevaCantidad = this.substractQuantity(cantidad);
    if (this.isGreatThan10(nuevaCantidad)) {
      this.setQuantity(nuevaCantidad);
      this.printAccountAdvice("Nueva cantidad", this.cantidad);
    } else {
      this.addQuantity(cantidad);
      this.printAccountAdvice(this.MESSAGE_MIN_ACCOUNT,
        this.cantidad
      );
    }
  }

  setQuantity(cantidad) {
    this.cantidad = cantidad;
  }

  isGreatThan10(nuevaCantidad) {
    return nuevaCantidad >= this.MIN_VALUE;
  }
 
  printAccountAdvice(message, cantidad) {
    console.log(message, cantidad);
  }
  addQuantity(cantidad) {
    return this.cantidad + cantidad;
  }
  substractQuantity(cantidad) {
    return this.cantidad - cantidad;
  }
}

cuenta = new Cuenta("Miguel", 50, "Activo");
console.log(`Este el saldo en cuenta ---> ${cuenta.cantidad}`);
cuenta.withdrawAccount(60);
cuenta.depositMoney(60);
cuenta.withdrawAccount(60);
cuenta.depositMoney(1000);
cuenta.withdrawAccount(60);
