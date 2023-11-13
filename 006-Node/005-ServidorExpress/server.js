const express = require("express") //O módulo express retorna uma função que instancia o express

const app = express() //A função express cria uma instância de todo o framework express em app

//Cria o Servidor com o express
const porta = 3001
app.listen(porta, function(){
    console.log(`Servidor Rodando na porta ${porta}`);
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

app.get("/livro", function(req, resp){

    const livro = {
        titulo : "Silencio dos inocentes", 
        autor : "Thomas Harris" 
    }

    resp.json(livro)

})