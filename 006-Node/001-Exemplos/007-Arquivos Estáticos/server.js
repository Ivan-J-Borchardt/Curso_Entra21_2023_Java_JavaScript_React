const express = require("express")
const path = require("path")



const app = express()


//Mapeando arquivos estáticos  --> Veja exemplos de uso no arquivo view/index.html 
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.static(path.join(__dirname, "livros")));


app.get("/", function (req, resp) {
    
    resp.sendFile(__dirname + "/view/index.html")
})



const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})


