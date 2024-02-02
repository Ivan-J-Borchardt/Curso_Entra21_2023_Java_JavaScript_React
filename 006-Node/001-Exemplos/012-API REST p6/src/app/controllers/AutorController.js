import AutorRepository from "../repositories/AutorRepository.js"


class AutorController{

    /**
     * Lista Tudo
     */
    async index(req, res){
        //lógica de consulta ao Banco de dados 
        let autor = await AutorRepository.findAll() 
        res.status(200).send(autor)
    }

    /**
     * Listar por Id
     */
    async show(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        let autor = await AutorRepository.findById(req.params.id)
        res.status(200).json(autor)
    }

    /**
     * Salvar Novo Registro
     */
    async store(req, res){
        let status = await AutorRepository.create(req.body)
        res.status(201).send(status)
    }

    /**
     * Atualizar Registro 
     */
    async update(req, res){
        let autor = await AutorRepository.update(req.params.id, req.body)
        res.status(200).json(autor)
    }

    /**
     * Deletar Registro
     */
    async delete(req, res){
        let autor = await AutorRepository.delete(req.params.id)
        res.status(200).send(autor)
    }


}

//padrao Singleton (Design Patterns)
export default new AutorController()

