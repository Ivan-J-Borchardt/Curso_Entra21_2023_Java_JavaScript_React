import {buscarAutorPorId, buscarIndexAutorPorId, getAutors} from "../database/conexao.js"

class AutorController{

    /**
     * Lista Tudo
     */
    index(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        res.status(200).send(getAutors())
    }

    /**
     * Listar por Id
     */
    show(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        let autor = buscarAutorPorId(req.params.id)
        res.status(200).json(autor)
    }

    /**
     * Salvar Novo Registro
     */
    store(req, res){
        getAutors().push(req.body)
        res.status(201).send("Autor cadastrado com sucesso")
    }

    /**
     * Atualizar Registro 
     */
    update(req, res){
        let indexAutor = buscarIndexAutorPorId(req.params.id)
        let autors = getAutors()
        autors[indexAutor].nome = req.body.nome
        autors[indexAutor].ano = req.body.ano
        autors[indexAutor].contribuicao = req.body.contribuicao
        res.status(200).json(autors[indexAutor])
    }

    /**
     * Deletar Registro
     */
    delete(req, res){
        let indexAutor = buscarIndexAutorPorId(req.params.id)
        getAutors().splice(indexAutor, 1)
        res.status(200).send(`Autor ${req.params.id} excluído com sucesso!`)
    }


}

//padrao Singleton (Design Patterns)
export default new AutorController

