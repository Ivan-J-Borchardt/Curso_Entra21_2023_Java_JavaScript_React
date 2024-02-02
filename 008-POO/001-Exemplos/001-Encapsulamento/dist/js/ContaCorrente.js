"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
class ContaCorrente {
    constructor(numCC, senha, saldo, limite) {
        this.saldo = 0;
        this.limite = 0;
        this.numCC = numCC;
        this.senha = senha;
        if (saldo) {
            if (saldo > 0) {
                this.saldo = saldo;
            }
        }
        if (limite) {
            if (limite > 0) {
                this.limite = limite;
            }
        }
    }
    //Getter 
    getSaldo() {
        return this.saldo;
    }
    getLimite() {
        return this.limite;
    }
    getSenha() {
        return this.senha;
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
    setSenha(senha) {
        this.senha = senha;
        return "000 - Nova senha cadastrada com sucesso!";
    }
    //Métodos Worker 
    deposito(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo = this.saldo + valorDeposito;
            return "000 - Op. Depósito realizado com sucesso!";
        }
        return "005 - Valor de depósito inválido";
    }
    saque(valorSaque) {
        if ((this.saldo + this.limite) >= valorSaque) {
            this.saldo = this.saldo - valorSaque;
            return "000 - Saque Efetuado com sucesso!";
        }
        else {
            return "006 - Saldo Insuficiente!";
        }
    }
}
exports.ContaCorrente = ContaCorrente;
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
