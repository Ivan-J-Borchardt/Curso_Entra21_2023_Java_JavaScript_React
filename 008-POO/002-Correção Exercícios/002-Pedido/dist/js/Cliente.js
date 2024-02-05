"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf, rg, tel) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.tel = tel;
    }
    //Métodos De Acesso (getters e setters)
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getRg() {
        return this.rg;
    }
    getTel() {
        return this.tel;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setRg(rg) {
        this.rg = rg;
    }
    setTel(tel) {
        this.tel = tel;
    }
}
exports.Cliente = Cliente;
