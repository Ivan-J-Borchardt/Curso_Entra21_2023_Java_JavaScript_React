const express = require("express") //O módulo express retorna uma função que instancia o express
//const conversorJson = require("body-parser")
const cors = require("cors")

const app = express() //A função express cria uma instância de todo o framework express em app

//Middlewares globais 
//app.use(conversorJson.urlencoded({extended: false})) 
//app.use(conversorJson.json())
app.use(express.urlencoded({extended: false})) 
app.use(express.json())


//app.use(cors())
app.use(function(req, resp, next){
    resp.setHeader("Access-Control-Allow-Origin", "*")
    //resp.setHeader("Access-Control-Allow-Methods","GET, POST")
    resp.setHeader("Access-Control-Allow-Headers", "Content-Type, x-requested-wit")
    
    //resp.header("Access-Control-Allow-Origin", "http://localhost:8080")

    //app.use(cors())
    next()
})



//Rotas da aplicação
app.status(200).get("/", function (req, resp) {

    //req.??? --> arquivo 
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Olá Pigmeu!!! </h1>
            </body>
        </html>
        ` 
    )
})



app.get("/livros", function(req, resp){

    resp.status(200).send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>
        `   
    )
})

//Retornando Um JSON
app.get("/livro", function(req, resp){

    const livro = {
        "titulo" : "Silencio dos inocentes", 
        "autor" : "Thomas Harris" 
    }

    resp.status(200).json(livro)

})



//Rota Get com passagem de parametros 
//Retornando um Json 
app.get("/usuario", function (req, resp) {
    
    
    //let nome = req.query.nmNome
    //let cpf = req.query.nmCpf
    

    let {nmNome: nome, nmCpf: cpf} = req.query

    console.log("Chegou na rota usuario",  nome, cpf);

    resp.status(200).json({
        "nomeUsu": nome, 
        "cpfUsu:": cpf
        })
})


//Rota Get com passagem de parametros 
//Retornando um array
app.get("/array", function (req, resp) {

    let programadores = [
        [ 'cbl1', 'Grace Hopper', 'Cobol', '1950' ],
        [ 'js1', 'Brendan Eich', 'JavaScript', '1993' ],
        [ 'jv1', 'Patrick Naughton', 'Java', '1991' ]
      ]
      

    
    resp.status(200).send(programadores)
    //resp.json(programadores)
})

//Rota Post com passagem de parametros 
//Retornando um Json
app.post("/usuario", function(req, resp){

    //console.log(req);
    /*
    let nome = req.body.nmNome
    let cpf = req.body.nmCpf
    */
    let {nmNome, nmCpf: cpf} = req.body


    resp.status(200).json({
        "nomeUsu": nmNome, 
        "cpfUsu:": cpf
        })
})


//Rotas Dinâmicas
app.get("/ola/:nome/:cargo", function(req, resp){
    console.log(req.params.nome);
    console.log(req.params.cargo);

    resp.status(200).send("<h1> Ola " + req.params.nome + "</h1>")
} )


//Cria o Servidor com o express
const porta = process.env.PORTA || 3000
app.listen(porta, function(){
    console.log(`Servidor Rodando na porta ${porta}`);
})
