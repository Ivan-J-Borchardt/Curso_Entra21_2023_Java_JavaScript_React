//Interfaces em Classes 
interface IVeiculo {
    marca: string;
    motor: string; 
    isLigado: boolean; 

    ligarMotor(): void;   

}

class Car implements IVeiculo {
    marca: string;
    motor: string;
    isLigado: boolean;
  

    constructor(marca: string, motor: string){
        this.marca = marca;
        this.motor = motor; 
        this.isLigado = false; 
    } 

    ligarMotor(): void {
        this.isLigado = true; 
    }

    
}


//herança 
class Suv extends Car {
    volumePortaMalas: number;

    constructor(vol: number, marca: string, motor: string){
        super(marca, motor);
        this.volumePortaMalas = vol; 
    }

}

var ecoSport = new Suv(23, 'Ford', '2.0'); 

ecoSport.ligarMotor(); 