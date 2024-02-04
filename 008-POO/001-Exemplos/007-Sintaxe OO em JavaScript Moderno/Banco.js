/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : Introduction to Object Oriented Programming - Encapsulation
 * Date        : 01.2021 
 ************************************************************************************************/

class Banco{

    #nome;
    #agencia;
    #cnpj;
    #clientes = []; 

    constructor(nome, cnpj, agencia){
        this.#nome = nome; 
        this.#cnpj = cnpj; 
        this.#agencia = agencia; 
    }

    get clientes(){
        return this.#clientes; 
    }

    getCliente(codCliente){
        if(codCliente >= 0 && codCliente < this.#clientes.length){
            return this.#clientes[codCliente]; 
        } 
    }

    get agencia(){
        return this.#agencia;
    }

    set agencia(agencia){
        this.#agencia = agencia; 
    }

    adicionaCliente(cliente){
        this.#clientes.push(cliente); 
    }


}