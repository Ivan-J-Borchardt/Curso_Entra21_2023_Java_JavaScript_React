import {buscarAutorPorId, buscarIndexAutorPorId, getAutors} from "../database/conexao.js"


class AutorRepository{

    //CRUD
    create(autor){
        getAutors().push(autor)
    }

    findAll(){
        return getAutors()
    }

    findById(id){
        return buscarAutorPorId(id)
    }

    update(id, autor){
        let indexAutor = buscarIndexAutorPorId(id)
        let autors = getAutors()
        autors[indexAutor].nome = autor.nome
        autors[indexAutor].ano = autor.ano
        autors[indexAutor].contribuicao = autor.contribuicao

        return autors[indexAutor]
    }

    delete(id){
        let indexAutor = buscarIndexAutorPorId(id)
        getAutors().splice(indexAutor, 1)
    }


}

export default new AutorRepository()