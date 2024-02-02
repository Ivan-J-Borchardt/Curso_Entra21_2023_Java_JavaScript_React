"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getConta() {
        return this.conta;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setConta(conta) {
        this.conta = conta;
    }
}
exports.Cliente = Cliente;
