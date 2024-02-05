export class Carro{
    protected marca: string
    protected motor: string
    public isLigado: boolean

    constructor(marca: string, motor: string){
        this.marca =  marca
        this.motor = motor
        this.isLigado = false
    }

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

    constructor(volumePortaMalas: number, marca: string, motor: string){
        super(marca, motor)
        this.volumePortaMalas = volumePortaMalas
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



}


var ecoSport = new Suv(23, 'Ford', '2.0')

console.log(`Carro Ligado: ${ecoSport.ligarMotor()}`);


console.log(`Marca: ${ecoSport.getMarca()}`);
//console.log(`Marca: ${ecoSport.marca}`);

