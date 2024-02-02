export class ContaCorrente{
    //Modificadores de Acesso: public, private, protected, readonly 
    private  numCC: string
    private  saldo: number = 0 
    private limite: number = 0
    private senha: number

    constructor(numCC: string, senha: number, saldo?:number, limite?:number){
        this.numCC = numCC
        this.senha = senha
        if (saldo) {
            if (saldo > 0) {
                this.saldo = saldo
            }
        }
        
        if (limite) {
            if (limite > 0) {
                this.limite = limite
            }
        }

        
    }

    //Getter 
    public getSaldo():number{
        return this.saldo
    }

    public getLimite():number{
        return this.limite
    }

    public getSenha():number{
        return this.senha
    }

    //Setter 
    public setLimite(limite:number):string{
        if (limite > (this.limite * 1.2)) {
            return "Novo limite acima de 20%, operação negada"
        }else if(limite < 0){
            return "Novo limite inferior a ZERO, operação negada"
        }else{
            this.limite = limite
            return "Novo limite " + this.limite
        }
        
    }

    public setSenha(senha:number):string{
        this.senha = senha
        return "000 - Nova senha cadastrada com sucesso!"
    }

    //Métodos Worker 
    public deposito(valorDeposito:number):string{
        if (valorDeposito > 0 ){
            this.saldo = this.saldo + valorDeposito
            return "000 - Op. Depósito realizado com sucesso!"
        }
        return "005 - Valor de depósito inválido"
    }

    public saque(valorSaque:number):string{
        if ((this.saldo + this.limite) >= valorSaque){
            this.saldo = this.saldo - valorSaque
            return "000 - Saque Efetuado com sucesso!"
        } else {
            return "006 - Saldo Insuficiente!"
        }
    }

} 

//Program principal
/*
let contaCorrente = new ContaCorrente("1")

let saque = 10000
console.log("Operacao Saque: " + contaCorrente.saque(saque));


console.log("Saldo:" + contaCorrente.getSaldo());


saque = 35
console.log("Operacao Saque: " + contaCorrente.saque(saque));

console.log("Saldo:" + contaCorrente.getSaldo());
*/



