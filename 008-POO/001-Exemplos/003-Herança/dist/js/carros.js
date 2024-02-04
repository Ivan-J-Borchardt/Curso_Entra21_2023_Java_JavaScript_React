"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suv = exports.Carro = void 0;
class Carro {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor;
        this.isLigado = false;
    }
    ligarMotor() {
        if (this.checkupPreStart()) {
            this.isLigado = true;
        }
        else {
            this.isLigado = false;
        }
        return this.isLigado;
    }
    checkupPreStart() {
        //Implementar aqui procedimentos checkup 
        //Se checkup Ok - Retornar True, senão Retornar False
        return true;
    }
}
exports.Carro = Carro;
class Suv extends Carro {
    constructor(volumePortaMalas, marca, motor) {
        super(marca, motor);
        this.volumePortaMalas = volumePortaMalas;
    }
    //Getters e Setters 
    getVolumePortaMalas() {
        return this.volumePortaMalas;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
}
exports.Suv = Suv;
var ecoSport = new Suv(23, 'Ford', '2.0');
console.log(`Carro Ligado: ${ecoSport.ligarMotor()}`);
console.log(`Marca: ${ecoSport.getMarca()}`);
