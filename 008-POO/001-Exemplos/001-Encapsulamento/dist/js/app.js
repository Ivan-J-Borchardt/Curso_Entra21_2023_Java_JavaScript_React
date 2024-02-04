"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const Cliente_1 = require("./Cliente");
const ContaCorrente_1 = __importDefault(require("./ContaCorrente"));
let cliente = new Cliente_1.Cliente("William", "009.008.007-23", new ContaCorrente_1.default("203-0", 500.00, 200));
console.log("Operação Depósito:" + cliente.getConta().deposito(300));
console.log("juros" + Calculadora_1.Calculadora.juros(200, 0.5));
/*
let saque = 10000
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());


saque = 35
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());
*/ 
