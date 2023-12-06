import AutorRepository from "../repositories/AutorRepository.js"


class AutorController{

    /**
     * Lista Tudo
     */
    index(req, res){
        //lógica de consulta ao Banco de dados 
        let autors = AutorRepository.findAll() 
        res.status(200).send(autors)
    }

    /**
     * Listar por Id
     */
    show(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        let autor = AutorRepository.findById(req.params.id)
        res.status(200).json(autor)
    }

    /**
     * Salvar Novo Registro
     */
    store(req, res){
        AutorRepository.create(req.body)
        res.status(201).send("Autor cadastrado com sucesso")
    }

    /**
     * Atualizar Registro 
     */
    update(req, res){
        let autor = AutorRepository.update(req.params.id, req.body)
        res.status(200).json(autor)
    }

    /**
     * Deletar Registro
     */
    delete(req, res){
        AutorRepository.delete(req.params.id)
        res.status(200).send(`Autor ${req.params.id} excluído com sucesso!`)
    }


}

//padrao Singleton (Design Patterns)
export default new AutorController

