import { Cliente } from "./Cliente"
import {ContaCorrente} from "./ContaCorrente"


let cliente = new Cliente("William", "009.008.007-23", new ContaCorrente("203-0", 500.00, 200))


console.log("Operação Depósito:" + cliente.getConta().deposito(300));
 

/*
let saque = 10000
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());


saque = 35
console.log("Operacao Saque: " + contaCorrente.saque(saque));
console.log("Saldo:" + contaCorrente.getSaldo());
*/