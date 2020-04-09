class Estudiante{
    constructor(nombre, apellido, calificaciones){
this.nombre= nombre;
this.apellido= apellido;
this.calificaciones= calificaciones;
    }

    impiprmirDatos(){
        return `Hola mi nombre es ${this.nombre}, 
        mis calificaciones 
        son: ${this.calificaciones}`;
    }

    tipoEstudiante(){
        let tipo;
        if(this.calificaciones >9){
            tipo= 'Excelente';
        }else if(this.calificaciones <8){
            tipo= 'Regular';
        }else{
            tipo= 'Bajo';
        }
        return tipo;
    }

    bajarCalificacion(){
        return this.calificaciones -= nueva;
    }
    //Atributos estaticos, estos no se necesitan instanciar
    //Pero es necesario pasarle primero el nombre de la clase.nombremetodo
    static hola(){
        return `Bienvenido`;
    }
   
}
//Instancia
const julio = new Estudiante('julio', 'mendez', 10);
julio.bajarCalificacion(1);

console.log(julio.impiprmirDatos());