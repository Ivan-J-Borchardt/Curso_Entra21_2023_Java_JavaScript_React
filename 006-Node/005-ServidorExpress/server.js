const express = require("express") //O módulo express retorna uma função que instancia o express
const conversorJson = require("body-parser")
const cors = require("cors")

const app = express() //A função express cria uma instância de todo o framework express em app

app.use(conversorJson.urlencoded({extended: false})) //middleware
app.use(conversorJson.json())

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")
    //resp.header("Access-Control-Allow-Origin", "http://localhost:8080")

    app.use(cors())
    next()
})

//Rotas da aplicação
app.get("/", function (req, resp) {

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

    resp.send(
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

    resp.json(livro)

})


//Rota Get com passagem de parametros 
app.get("/usuario", function (req, resp) {
    
    let nome = req.query.nmNome
    let cpf = req.query.nmCpf

    console.log("Chegou na rota usuario",  nome, cpf);

    resp.json({
        "nomeUsu": nome, 
        "cpfUsu:": cpf
        })
})

app.post("/usuario", function(req, resp){

    //console.log(req);

    let nome = req.body.nmNome
    let cpf = req.body.nmCpf

    resp.json({
        "nomeUsu": nome, 
        "cpfUsu:": cpf
        })
})


//Rotas Dinâmicas
app.get("/ola/:nome/:cargo", function(req, resp){
    console.log(req.params.nome);
    console.log(req.params.cargo);

    resp.send("<h1> Ola " + req.params.nome + "</h1>")
} )


//Cria o Servidor com o express
const porta = 3001
app.listen(porta, function(){
    console.log(`Servidor Rodando na porta ${porta}`);
})
