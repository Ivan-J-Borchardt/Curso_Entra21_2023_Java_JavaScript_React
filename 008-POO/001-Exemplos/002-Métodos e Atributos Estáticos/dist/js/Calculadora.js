"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    /**
     *
     * @param id
     */
    constructor(id) {
        this.id = id;
        Calculadora.contadorCalculadora++;
    }
    /**
     *
     * @param raio
     * @returns areaCirculo
     */
    static areaCirculo(raio) {
        let areaCirculo = Math.PI * raio * raio;
        return areaCirculo;
    }
    static areaRetangulo(baseRet, alturaRet) {
        let areaRetangulo = baseRet * alturaRet;
        return areaRetangulo;
    }
    static areaTrianguloRetangulo(baseTri, alturaTri) {
        let areaTrianguloRetangulo = (baseTri * alturaTri) / 2;
        return areaTrianguloRetangulo;
    }
    static areaTrianguloEquilatero(lado) {
        let areaTrianguloEquilatero = ((lado ** 2) * Math.sqrt(3)) / 4;
        return lado;
    }
}
exports.Calculadora = Calculadora;
//Atributos da Classe - Acessível a todos os objetos do tipo Cliente
Calculadora.contadorCalculadora = 0;
Calculadora.PI = 3.14;
