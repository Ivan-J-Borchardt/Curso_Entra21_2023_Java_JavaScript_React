/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : Introduction to Object Oriented Programming - Encapsulation
 * Date        : 01.2021 
 ************************************************************************************************/

class Cliente{

    //Atributo da Classe - Acessível a todos os objetos do tipo Cliente
    static contadorCliente = 0; 

    //Atributos do objeto - Acessíveis apenas dentro do objeto
    #nome; 
    #cpf; 
    #rg; 
    #endereco;
    #conta;


   //Método Construtor  
   constructor(nome, conta, cpf, rg, endereco){
       this.nome = nome;
       this.conta = conta; 
       this.cpf = cpf;
       this.rg = rg;   
       this.endereco = endereco; 
       Cliente.contadorCliente++; //Observer que o atributo da classe contadorCliente é
                                  // acessível através do nome da classe...
   }


    //Métodos de acesso
    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;  
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(cpf){
        this.#cpf = cpf;
    }

    
    get rg(){
        return this.#rg;
    }

    set rg(rg){
        this.#rg = rg;
    }


    
    get endereco(){
        return this.#endereco;
    }

    set endereco(endereco){
        this.#endereco = endereco;
    }

    get conta(){
        return this.#conta;
    }

    set conta(conta){
        this.#conta = conta; 
    }

}