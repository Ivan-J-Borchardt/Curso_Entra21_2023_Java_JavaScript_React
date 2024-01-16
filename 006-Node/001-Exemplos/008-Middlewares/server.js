const express = require("express")

const app = express()

//Middlewares globais...
app.use(function (req, resp, next) {
    if (req.query.nmUser == "XPTO" && req.query.nmSenha == 1234) {
        resp.token = {
            teste: "OK"
        }
        next()
    } 
    resp.status(401).end() 
    
    next()

})

app.get("/", function (req, resp) {
    resp.json({msn: "Chegou na rota raiz"})
})


//Middlewares globais...
app.use(function (req, resp, next) {
    console.log("Middleware 1");


   
    next()

})


app.use(function (req, resp, next) {
    console.log("Middleware 2");


   
    next()

})




app.get("/rota1", function (req, resp) {
    resp.json({msn: "Chegou na rota1"})
})


//Exemplo de Middleware de rota  
app.get("/usuario", verificarUser ,function (req, resp) {

    console.log(resp.token);
    resp.json({msn: "Chegou na rota usuario - GET",
         user: req.query.nmUser, 
         cod: req.query.nmSenha
        })
})

function verificarUser(req, resp, next) {
    if (req.query.nmUser == "XPTO" && req.query.nmSenha == 1234) {
        resp.token = {
            teste: "OK"
        }
        next()
    } 
    resp.status(401).end()  
}


const porta = 3001
app.listen(porta, function () {
    console.log("Servidor rodando na porta " + porta);
})
