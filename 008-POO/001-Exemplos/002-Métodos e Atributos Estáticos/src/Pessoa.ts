export class Pessoa{
    //Atributo da classe
    static qtdPessoas: number = 0 

    //Atributos do Objeto 
    private nome: string

    constructor(nome: string){
        this.nome = nome
        Pessoa.qtdPessoas++    
    }

}




let pessoa = new Pessoa("Joao")//#xzr
console.log(Pessoa.qtdPessoas);

let pessoa2 = new Pessoa("Maria")//#qwe4
console.log(Pessoa.qtdPessoas);

let pessoa3 = new Pessoa("Maria")//#x564
console.log(Pessoa.qtdPessoas);

let pessoa4 = new Pessoa("Maria")//#x562
console.log(Pessoa.qtdPessoas);