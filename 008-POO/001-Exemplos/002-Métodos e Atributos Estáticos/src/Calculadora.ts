export class Calculadora {

    //Atributos da Classe - Acessível a todos os objetos do tipo Cliente
    static contadorCalculadora = 0;
    static PI = 3.14;

    //Atributos do objeto - Acessíveis apenas dentro do objeto
    private id: number

    /**
     * 
     * @param id 
     */
    constructor(id: number) {
        this.id = id
        Calculadora.contadorCalculadora++
    }

    /**
     * Calcula a area do circulo a partir do raio
     * @param raio 
     * @returns areaCirculo
     */
    static areaCirculo(raio: number): number {
        let areaCirculo:number = Math.PI * raio * raio
        return areaCirculo
    }

    /**
     * 
     * @param baseRet 
     * @param alturaRet 
     * @returns areaRetangulo (number)
     */
    static areaRetangulo(baseRet: number, alturaRet:number):number{
        let areaRetangulo:number = baseRet * alturaRet
        return areaRetangulo
    }

    static areaTrianguloRetangulo(baseTri: number, alturaTri: number):number{
        let areaTrianguloRetangulo:number = (baseTri * alturaTri)/2
        return areaTrianguloRetangulo
    }

    static areaTrianguloEquilatero(lado:number):number{
        let areaTrianguloEquilatero:number = ((lado ** 2) *  Math.sqrt(3) )/4
        return lado
    }

    

}