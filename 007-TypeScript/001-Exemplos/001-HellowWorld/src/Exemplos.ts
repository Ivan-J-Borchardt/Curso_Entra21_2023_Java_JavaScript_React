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
var idades: number[] = [10, 14, 20, 5, 20]

console.log(idades);
console.log(typeof(idades));
console.log(idades.length)

idades.push(34)

//tupla (tuple)
//            id,     nome,  isCadastrado, listaCaracteres, idade
let usuario: [number, string, boolean, string[], number]
usuario = [1, "Jaoa Pessoa", false, ["a","b", "c"], 23]
//usuario.push(true) <-- Cuidado, isso deveria, mas nao retorna erro...

console.log(usuario);


//Objetos Literais (Object Literals)
let user: {id: number, nome: string, isPermitido: boolean}

user = {
    id: 1,
    nome: "Joana",
    isPermitido: true
}

user.nome = "Joana Dark"

console.log(user);

//Tipo any (Evite usar...)
let varA : any
varA = "Oi"
varA = 1
varA = true 
varA = [1, 3, true]

//Union Type 
var id: string | number
id = 200
id = "200"

//type Alias 
type userIdType = string | number 

var userId: userIdType
userId = "200"
userId = 100

//Literal Types
let estadoUser : "autenticado" | null | "deslogado" | boolean 

estadoUser = "autenticado"
estadoUser = null 
estadoUser = "deslogado"
estadoUser = false
//estadoUser = "teste" <--- Isso gera erro...


//Enum <-- uma espécie de coleção de constantes que são aceitas em um determinado domínio 
enum Tamanho {
   P = "Pequeno", 
   M = "Médio", 
   G = "Grande"
}

const camisa = {
    desc: "Camisa basica preta", 
    size: Tamanho.P
}


console.log(camisa.size);

enum Operacao {
    debitoCC = 5038, 
    creditoCC = 5039,
    debitoP = 6038,
    creditoP = 6039 
}

let op = 5039 // <-- recebendo do DB ou API ou client...


if (op == Operacao.debitoCC){

}else if(op = Operacao.creditoCC){

} else if(op == Operacao.debitoP){

}else if (op == Operacao.creditoP) {
    
}

//Objetos Literais (Object Literals)
let user2: {id: number, nome: string, isPermitido: boolean}

//Interfaces 
interface ParametrosFuncoesMatematicas{
    n1: number;
    n2: number; 
}

let teste : ParametrosFuncoesMatematicas; 

let op1: {n1: number, n2: number} =  {n1: 3, n2: 4}

let op2: ParametrosFuncoesMatematicas =  {n1: 3, n2: 4}

teste = {n1: 3, n2: 7}

function somaNum(nums:ParametrosFuncoesMatematicas):number {
    return nums.n1 + nums.n2
}

let res: number = somaNum(op1)
let res1: number = somaNum(op2)
let res2: number = somaNum({n1: 3, n2: 5})

//Funções 
//tipagem dos parâmetros
function soma(num1: number, num2: number) {
    return num1 + num2;
}

//tipagem do retorno 
function digaOla(nome: string): string{
    return "olá " + nome;
}

function testeRet():ParametrosFuncoesMatematicas{
    return {n1:0, n2:0}
}

//funções sem retorno (void) 
function gravarLog(msn: string): void{
    console.log(msn);
}

//funções com parâmetros opcionais 
function saudar(nome: string, saudacao?: string):void{
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
     // console.log("Olá" + saudacao +" " + nome);
    } else {
        console.log(`Olá ${nome}`); 
    }
}

saudar("Fulano", "Sr.")
saudar("Joana")


//Narrowing 
function facaAlgo(info: number | boolean): void{

    if (typeof info === "number") {
        console.log("O dado é numérico");
    } else {
        console.log("O dado é lógico");
    }
}

//Generics 
function exibirItensArray<T>(vetor: T[]){

    vetor.forEach(element => {
        console.log(element);
    });

}

var x1 = [0, 2, 4, 6]; 
var x2 = ["a", "b", "c"];
var x3 = [true, false, true]
var x4 = [{ax1: "saasd", ax2:3434}, {ax1: "saasd", ax2:3434}, {ax1: "saasd", ax2:3434} ]

exibirItensArray(x2); 
exibirItensArray(x4);