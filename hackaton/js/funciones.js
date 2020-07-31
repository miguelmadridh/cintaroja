class Usuarios {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

function getLocalizacion(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarUbicacion);
      }
}

function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }

  
function showUsers() {
    getLocalizacion();
  let usuarios = [
    new Usuarios("Carlos", "5555555555555"),
    new Usuarios("Hiromi", "2222222222222"),
    new Usuarios("Sergio", "1122111221122"),
    new Usuarios("Miguel", "66666665555"),
    new Usuarios("Fernando", "4444444444444")
  ];

  let usuarioLlamar = new Usuarios("Miguel", "66666665555");

  usuarios.forEach(usuario => {
    setTimeout(() => construyeMensaje("Mandando el mensaje a ",usuario.nombre, usuario.telefono), 3000);
  });

  
  setTimeout(() => construyeMensaje("Llamando  a ",usuarioLlamar.nombre, usuarioLlamar.telefono), 2000);



  

}



let construyeMensaje = (mensaje, nombre, telefono) => {
  console.log(mensaje + nombre + " Telefono " + telefono);
};
