class Cuenta{
    constructor(nombre, saldo){
        this.nombre= nombre;
        this.saldo= saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    static bienvenido(){
        return `Bienvenid a tu cuenta`;
    }
}
const cliente= new Cuenta('Pedrop', 1000);
console.log(cliente.imprimirSaldo());


class Empresa extends Cuenta{
    constructor(nombre, saldo, teleforno, tipo){
        //El parametro super va al constructor de la clase Cuenta y lee los datos que le corresponden
        super(nombre, saldo);
        this.teleforno=teleforno;
        this.tipo=tipo=tipo;
    }
}
const empresa = new Empresa('Empresa1', 10000, 456105, 'Servicios');
console.log(empresa.imprimirSaldo());
//Podemos reescribir métodos, pero debe ser con su mismo nombre