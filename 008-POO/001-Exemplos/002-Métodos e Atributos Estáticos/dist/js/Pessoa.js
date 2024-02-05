"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome) {
        this.nome = nome;
        Pessoa.qtdPessoas++;
    }
}
exports.Pessoa = Pessoa;
//Atributo da classe
Pessoa.qtdPessoas = 0;
let pessoa = new Pessoa("Joao"); //#xzr
console.log(Pessoa.qtdPessoas);
let pessoa2 = new Pessoa("Maria"); //#qwe4
console.log(Pessoa.qtdPessoas);
let pessoa3 = new Pessoa("Maria"); //#x564
console.log(Pessoa.qtdPessoas);
let pessoa4 = new Pessoa("Maria"); //#x562
console.log(Pessoa.qtdPessoas);
