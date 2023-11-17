const express = require("express")
const path = require("path")


const app = express()

const porta = 3001
app.listen(porta, function() {
    console.log(`Servidor Rodando na porta ${porta}`);
})


app.get("/", function(req, resp){

    console.log("__dirname: " + __dirname);
    console.log("basename: " + path.basename(__dirname));
    console.log("dirname: " + path.dirname(__dirname));
    console.log("extname: " + path.extname("index.html"));

    resp.sendFile(path.normalize(__dirname + "/paginas/index.html"))
})