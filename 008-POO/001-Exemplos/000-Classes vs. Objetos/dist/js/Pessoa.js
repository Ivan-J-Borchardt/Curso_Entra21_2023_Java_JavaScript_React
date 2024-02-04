"use strict";
//classe vs. objeto 
class Pessoa {
    //Métodos (Funções)
    //Método Construtor 
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        /*
          - O constructor é um método especial que serve para instânciar o 'Objeto' na memória.
          - Perceba que os parâmetros idade e cpf estão marcados como opcionais, é dessa forma que
          se faz 'sobrecarga' de construtores em TypeScript
        */
    }
    //Métodos Getter e Setter
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    //Métodos Worker 
    mostrarNomeUsuario(tipoUser) {
        console.log(`O Nome do Usuário é ${this.nome} tipo: ${tipoUser}`);
        /*
            também podemos usar '?' para tornar os parâmetros do método opcionais
            e assim simular a sobrecarga de método
        */
    }
}
//Invocando o construtor da classe e criando objetos na memória
let pessoa = new Pessoa("Joao", 23, "0004.0009.333-23");
let pessoa2 = new Pessoa("Evandro", 21);
//Exemplos de acesso aos atributos(propriedades) 
//e métodos(comportamentos) da classe através da notação 'ponto'
console.log(pessoa.nome);
pessoa.nome = "Joana";
console.log(pessoa.nome);
console.log(pessoa);
console.log(pessoa.mostrarNomeUsuario());
