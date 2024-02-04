/*
 - Abstração

*/

//Classe Abstrata 
export abstract class Veiculo{
    constructor(protected marca: string, protected modelo: string){}

    abstract ligarMotor(): boolean
    abstract desligarMotor(): boolean

    public acinarAssitenteEstacionamento():boolean{
        return true 
    }
}

//Classe Concreta
export class Carro extends Veiculo{

    protected motor: string
    public isLigado: boolean

    constructor(marca: string, motor: string, modelo: string){
        super(marca, modelo)
        this.motor = motor
        this.isLigado = false
    }

    //Métodos Worker
    public ligarMotor(): boolean{
        if (this.checkupPreStart()){
            this.isLigado = true
        }else{
            this.isLigado = false
        }
        return this.isLigado
    }

    public desligarMotor(): boolean {
        throw new Error("Method not implemented.")
    }

    private checkupPreStart():boolean{
        //Implementar aqui procedimentos checkup 
        //Se checkup Ok - Retornar True, senão Retornar False
        return true 
    }

}

export class Suv extends Carro {

    private volumePortaMalas: number
    private modoLuzCarro: "auto" | "cidade" | "alta" | "neblina" 
    private isLuzLigada: boolean 

    constructor(volumePortaMalas: number, marca: string, motor: string, modelo:string){
        super(marca, motor, modelo)
        this.volumePortaMalas = volumePortaMalas
        this.modoLuzCarro = "auto"
        this.isLuzLigada = false
    }


    //Getters e Setters 
    public getVolumePortaMalas(): number{
        return this.volumePortaMalas
    }
    
    public getMarca(): string{
        return this.marca; 
    }

    public setMarca(marca:string): void{
        this.marca = marca
    }

    //Métodos Worker 
    public ligarMotor(): boolean{
        this.ligarLuzes()
        this.isLigado = true
        return this.isLigado
        /*
           Perceba que o método Suv.ligarMotor() é diferente 
           do método Carro.ligarMotor(), contúdo sua assinatura é a mesma, 
           isto é um Polimorfismo de Sobreescrita!   
        */
    }



    private ligarLuzes(): boolean{
        if (this.modoLuzCarro === "auto") {
            this.isLuzLigada = true 
        }else{
            this.isLuzLigada = false
        }
        return this.isLuzLigada
    }

}


var ecoSport = new Suv(23, 'Ford', '2.0', '2020')

console.log(`Carro Ligado: ${ecoSport.ligarMotor()}`);
console.log(`Marca: ${ecoSport.getMarca()}`);

console.log(`Assitente Estacionamento: ${ecoSport.acinarAssitenteEstacionamento()}`);

//console.log(`Marca: ${ecoSport.marca}`);

