import {consulta} from "../database/conexao.js"


class AutorRepository{

    //CRUD
    create(autor){
        const sql = 'insert into autor(nome, ano, contribuicao) values ($1, $2, $3) returning *'
        const valores = [autor.nome, autor.ano, autor.contribuicao]
        return consulta(sql, valores, "Erro ao cadastrar Autor!")
    }
    
    findAll(){
        const sql = 'select * from autor'
        const valores = []
        return consulta(sql, valores, "Erro ao buscar Autor!")
    }
    
    findById(id){
        const sql = 'select * from autor where id = $1'
        const valores = [id]
        return consulta(sql, valores, "Erro ao buscar Autor por Id!")
    }
    
    update(id, autor){
        const sql = 'update autor set nome = $2, ano = $3, contribuicao = $4 where id = $1 returning *'
        const valores = [id, autor.nome, autor.ano, autor.contribuicao]
        return consulta(sql, valores, "Erro ao alterar Autor por Id!")
    }

    
    delete(id){
        const sql = 'delete from autor where id = $1 returning *'
        const valores = [id]
        return consulta(sql, valores, "Erro ao deletar Autor por Id!")
    }
    

}

export default new AutorRepository()