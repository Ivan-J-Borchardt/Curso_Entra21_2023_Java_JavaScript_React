"use strict";
class Usuario {
    constructor(id, nome, funcao) {
        this.id = id;
        this.nome = nome;
        this.funcao = funcao;
    }
}
class ContaCorrente {
    constructor() {
        this.saldo = 0;
        this.limite = 100.00;
    }
    //Getter 
    getSaldo() {
        return this.saldo;
    }
    getLimite() {
        return this.limite;
    }
    //Setter 
    setLimite(limite) {
        if (limite > (this.limite * 1.2)) {
            return "Novo limite acima de 20%, operação negada";
        }
        else if (limite < 0) {
            return "Novo limite inferior a ZERO, operação negada";
        }
        else {
            this.limite = limite;
            return "Novo limite " + this.limite;
        }
    }
    //Métodos Worker 
    deposito(valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
    }
    saque(valorSaque) {
        if ((this.saldo + this.limite) >= valorSaque) {
            this.saldo = this.saldo - valorSaque;
            return "Saque Efetuado com sucesso!";
        }
        else {
            return "Saldo Insuficiente!";
        }
    }
}
//Program principal
let contaCorrente = new ContaCorrente();
let saque = 10000;
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());
saque = 35;
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());
/*
let user = new Usuario(1, "Edson", "Desenvolvedor React")

user.nome = "Bruno"
user.id = 5
user.funcao = "dfdf"

ContaCorrente.saldo = 1000000
*/
