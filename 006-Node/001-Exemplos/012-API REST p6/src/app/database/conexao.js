import path from 'path'
import { fileURLToPath } from 'url'
import pg from 'pg'
import {config} from 'dotenv'
import { rejects } from 'assert'

const {Pool, Client} = pg


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

config({
    overide: true, 
    path:  path.join(__dirname, "conexao.env") 
})

const dadosConexao = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
}

const pool = new Pool(dadosConexao)
var client
(async function(){
    client =  await pool.connect()
})()


export const consulta = (sql, valores, msnErro)=>{
    return new Promise(function(resolve, reject){
        client.query(sql, valores, function(erro, resul){
            if (erro) {
                return reject(msnErro + " " + erro)
            }
            return resolve(resul.rows)
        })
    })
}






/*
async function buscarCorretores(){
    const client =  await pool.connect()

    try {

        const sql = `select * from autor`
        const resp = await client.query(sql valores)

        console.log(resp.rows)
       
        return resp.rows

        
    } catch (error) {
       console.log(error)
    } finally {
        client.release()
    }
}

export {buscarCorretores} 

//Mockup Maquete Modelo

const autors = [
    {id: 1, nome: "Blaise Pascal", ano: 1642, contribuicao: "Pascalina"},
    {id: 2, nome: "Charles Babbage", ano: 1833, contribuicao: "Engenho analítico"},
    {id: 3, nome: "Ada Lovelace", ano: 1833, contribuicao: "Bases da lógica de Programação"},
    {id: 4, nome: "Reynold B. Johnson", ano: 1956, contribuicao: "Disco Rígido"},
    {id: 5, nome: "Tim Berners Lee", ano: 1956, contribuicao: "World Wide Web"}
] 

function buscarAutorPorId(id) {
    return autors.filter(autor => autor.id == id)[0]
}

function buscarIndexAutorPorId(id) {
    return autors.findIndex(autor => autor.id == id)
}

function getAutors() {
    return autors
}

export {buscarAutorPorId, buscarIndexAutorPorId, getAutors}
*/