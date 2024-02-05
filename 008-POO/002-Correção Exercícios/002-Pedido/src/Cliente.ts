export class Cliente{

    private nome: string
    private cpf: string
    private rg: string 
    private tel: string 

    constructor(nome: string, cpf: string, rg: string, tel: string){
        this.nome = nome
        this.cpf = cpf 
        this.rg = rg
        this.tel = tel 
    }

    //Métodos De Acesso (getters e setters)
    public getNome():string{
        return this.nome
    }

    public getCpf():string{
        return this.cpf
    }

    public getRg():string{
        return this.rg
    }

    public getTel():string{
        return this.tel
    }

    public setNome(nome: string):void{
        this.nome = nome
    }

    public setCpf(cpf: string):void{
        this.cpf = cpf 
    }

    public setRg(rg: string): void{
        this.rg = rg
    }

    public setTel(tel: string): void{
        this.tel = tel
    }

}