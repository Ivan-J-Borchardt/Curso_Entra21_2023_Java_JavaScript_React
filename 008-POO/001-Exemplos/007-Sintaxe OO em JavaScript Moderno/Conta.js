/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : Introduction to Object Oriented Programming - Encapsulation
 * Date        : 01.2021 
 ************************************************************************************************/


class Conta{
    #numConta;       //Lembrando que o modificador de acesso # ainda está na fase final de aprovação para se tornar 
    #saldo = 0;      //parte oficial da linguagem. Existe uma convenção de usar "underline" para simbolizar que 
    #limite = 0;     // determinado método é privado, por exemplo: _numConta. 
    #senha; 
    #tipoConta;

    //Método Construtor 
    constructor(numConta, saldo, limite, senha, tipoConta){
        this.numConta = numConta;  //Note que os valores não estão sendo passados diretamente para os atributos da classe
        this.depositar(saldo);     //ao invés disso, estão sendo passados através dos metodos da classe. 
        this.limite =limite;
        this.senha = senha; 
        this.tipoConta = tipoConta; 
    }

    //Métodos de Acesso  
    // **Os métodos Get também são conhecidos como accessor methods
    // **Os métodos Set também são conhecidos como mutator methods
    get numConta(){
        return this.#numConta;
    }

    set numConta(numConta){
        this.#numConta = numConta;
    }
    
    get saldo(){
        return this.#saldo;
    }

    get limite(){
        return this.#limite;
    }

    set limite(limite){
        this.#limite = limite;
    }


    get senha(){
        return this.#senha;
    }

    set senha(senha){
        this.#senha = senha; 
    }

    get tipoConta(){
        return this.#tipoConta;
    }

    set tipoConta(tipoConta){
        this.#tipoConta = tipoConta;
    }


    //Métodos Worker 
    depositar(valorDeposito){
        if (valorDeposito > 0) {
            this.#saldo += valorDeposito;
            return "000 - Op realizada com sucesso!";
        }
        return "005 - Valor de depósito inválido!"; 
         
    }

    sacar(valorSaque){
        if ((this.#saldo + this.#limite) > valorSaque ) {
            this.#saldo = this.#saldo - valorSaque; 
            return "000 - Op realizada com sucesso!";;
        } else {
            return "006 - Saldo insuficiente para a operação!"; 
        }
    }

}