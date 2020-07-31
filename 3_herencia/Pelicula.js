const Largometraje = require('./Largometraje');

class Pelicula extends Largometraje{
 constructor(titulo, duracion, horario, precio, audiencia){
     super(titulo, duracion, horario, precio, audiencia);
   
 }

}
module.exports=Pelicula;
