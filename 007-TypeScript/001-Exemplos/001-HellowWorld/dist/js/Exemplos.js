"use strict";
console.log("Olá TypeScript!!!");
//Tipagem de dados 
//Tipos Primitivos (string, boolean, number)
//---------------------------------------------------
let idade;
var nome = "Ada Lovelace";
const isAluno = true;
idade = 23;
//idade = "23" //irá gerar o erro: src/index.ts:11:1 - error TS2322: Type 'string' is not assignable to type 'number'.
console.log(nome.toUpperCase());
//console.log(idade.toUpperCase());
console.log(typeof (idade));
//Atribuindo um tipo de dado por inferência 
let idadeAluno = 10;
console.log(typeof (idadeAluno));
//idadeAluno = "XYZ" // Não é possível mudar o tipo de dado ao longo da execução
//Tipos Object 
//-------------------------------------------------
//Array 
var idades = [10, 14, 20, 5, 20];
console.log(idades);
console.log(typeof (idades));
console.log(idades.length);
idades.push(34);
//tupla (tuple)
//            id,     nome,  isCadastrado, listaCaracteres, idade
let usuario;
usuario = [1, "Jaoa Pessoa", false, ["a", "b", "c"], 23];
//usuario.push(true) <-- Cuidado, isso deveria, mas nao retorna erro...
console.log(usuario);
//Objetos Literais (Object Literals)
let user;
user = {
    id: 1,
    nome: "Joana",
    isPermitido: true
};
user.nome = "Joana Dark";
console.log(user);
//Tipo any (Evite usar...)
let varA;
varA = "Oi";
varA = 1;
varA = true;
varA = [1, 3, true];
//Union Type 
var id;
id = 200;
id = "200";
var userId;
userId = "200";
userId = 100;
//Literal Types
let estadoUser;
estadoUser = "autenticado";
estadoUser = null;
estadoUser = "deslogado";
estadoUser = false;
//estadoUser = "teste" <--- Isso gera erro...
//Enum <-- uma espécie de coleção de constantes que são aceitas em um determinado domínio 
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "Pequeno";
    Tamanho["M"] = "M\u00E9dio";
    Tamanho["G"] = "Grande";
})(Tamanho || (Tamanho = {}));
const camisa = {
    desc: "Camisa basica preta",
    size: Tamanho.P
};
console.log(camisa.size);
var Operacao;
(function (Operacao) {
    Operacao[Operacao["debitoCC"] = 5038] = "debitoCC";
    Operacao[Operacao["creditoCC"] = 5039] = "creditoCC";
    Operacao[Operacao["debitoP"] = 6038] = "debitoP";
    Operacao[Operacao["creditoP"] = 6039] = "creditoP";
})(Operacao || (Operacao = {}));
let op = 5039; // <-- recebendo do DB ou API ou client...
if (op == Operacao.debitoCC) {
}
else if (op = Operacao.creditoCC) {
}
else if (op == Operacao.debitoP) {
}
else if (op == Operacao.creditoP) {
}
//Objetos Literais (Object Literals)
let user2;
let teste;
let op1 = { n1: 3, n2: 4 };
let op2 = { n1: 3, n2: 4 };
teste = { n1: 3, n2: 7 };
function somaNum(nums) {
    return nums.n1 + nums.n2;
}
let res = somaNum(op1);
let res1 = somaNum(op2);
let res2 = somaNum({ n1: 3, n2: 5 });
//Funções 
//tipagem dos parâmetros
function soma(num1, num2) {
    return num1 + num2;
}
//tipagem do retorno 
function digaOla(nome) {
    return "olá " + nome;
}
function testeRet() {
    return { n1: 0, n2: 0 };
}
//funções sem retorno (void) 
function gravarLog(msn) {
    console.log(msn);
}
//funções com parâmetros opcionais 
function saudar(nome, saudacao) {
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
        // console.log("Olá" + saudacao +" " + nome);
    }
    else {
        console.log(`Olá ${nome}`);
    }
}
saudar("Fulano", "Sr.");
saudar("Joana");
//Narrowing 
function facaAlgo(info) {
    if (typeof info === "number") {
        console.log("O dado é numérico");
    }
    else {
        console.log("O dado é lógico");
    }
}
//Generics 
function exibirItensArray(vetor) {
    vetor.forEach(element => {
        console.log(element);
    });
}
var x1 = [0, 2, 4, 6];
var x2 = ["a", "b", "c"];
var x3 = [true, false, true];
var x4 = [{ ax1: "saasd", ax2: 3434 }, { ax1: "saasd", ax2: 3434 }, { ax1: "saasd", ax2: 3434 }];
exibirItensArray(x2);
exibirItensArray(x4);
