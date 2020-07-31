class Largometraje{
    constructor(titulo, duracion, horario, precio, audiencia){
        this.titulo= titulo;
        this.duracion = duracion;
        this.horario = horario;
        this.precio = precio;
        this.audiencia = audiencia

    }
    getTitulo(){
        return this.titulo;
    }
    getDuracion(){
        return this.duracion;
    }
}

module.exports=Largometraje;