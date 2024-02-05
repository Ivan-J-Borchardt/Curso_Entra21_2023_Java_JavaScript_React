/*
 - Polimorfismo: permite que um mesmo nome represente 
 vários comportamentos diferentes
 Tipos:
  1. Sobreposição (Sobreescrita\Subtyping)
  2. Sobrecarga (Overloading)
  3. Generics (Parametric)
 --- Especialização: "Da Classe pai em direção à Classe Filho"
 --- Generalização: "Da Classe filho em direção à Classe Pai" 
*/

export class Carro{
    protected marca: string
    protected motor: string
    public isLigado: boolean

    constructor(marca: string, motor: string){
        this.marca =  marca
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

    constructor(volumePortaMalas: number, marca: string, motor: string){
        super(marca, motor)
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

    public exibirItensArray<T>(vetor: T[]){

        vetor.forEach(element => {
            console.log(element);
        });
    
    }

}


var ecoSport = new Suv(23, 'Ford', '2.0')

console.log(`Carro Ligado: ${ecoSport.ligarMotor()}`);
console.log(`Marca: ${ecoSport.getMarca()}`);
//console.log(`Marca: ${ecoSport.marca}`);

