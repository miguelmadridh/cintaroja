const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor (titulo, duracion, horario, precio, audiencia){
        super(titulo, duracion, horario, precio, audiencia);
        
    }
}


module.exports=Documental;