console.log("Olá TypeScript!!!");

//Tipagem de dados 
//Tipos Primitivos (string, boolean, number)
//---------------------------------------------------
let idade: number 
var nome: string = "Ada Lovelace"
const isAluno: boolean  = true 

idade = 23
//idade = "23" //irá gerar o erro: src/index.ts:11:1 - error TS2322: Type 'string' is not assignable to type 'number'.
console.log(nome.toUpperCase());
//console.log(idade.toUpperCase());
console.log(typeof(idade));


//Atribuindo um tipo de dado por inferência 

let idadeAluno = 10 
console.log(typeof(idadeAluno));

//idadeAluno = "XYZ" // Não é possível mudar o tipo de dado ao longo da execução


//Tipos Object 
//-------------------------------------------------
//Array 
const idades: number[] = [10, 14, 20, 5, 20]

console.log(idades);
console.log(typeof(idades));
console.log(idades.length)

idades.push(34)

//tupla (tuple)
//            id,     nome,  isCadastrado, listaCaracteres, idade
let usuario: [number, string, boolean, string[], number]
usuario = [1, "Jaoa Pessoa", false, ["a","b", "c"], 23]



