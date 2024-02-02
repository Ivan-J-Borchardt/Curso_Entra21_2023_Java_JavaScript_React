import { ContaCorrente } from "./ContaCorrente"

export class Cliente{

    private nome: string 
    private cpf: string
    private conta: ContaCorrente
    //private endereco: Endereco


    constructor (nome: string, cpf: string, conta: ContaCorrente){
        this.nome = nome
        this.cpf = cpf
        this.conta = conta
    }

    public getNome():string{
        return this.nome
    }

    public getCpf():string{
        return this.cpf
    }

    public getConta():ContaCorrente{
        return this.conta
    } 

    public setNome(nome:string){
        this.nome = nome
    }

    public setCpf(cpf:string){
        this.cpf = cpf
    }

    public setConta(conta:ContaCorrente){
        this.conta = conta
    }

}