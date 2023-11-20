const express = require("express")
const cors = require("cors")

const app = express()

//Middlewares
app.use(cors())

const porta = 3001
app.listen(porta, function() {
    console.log("Servidor Rodando na porta " + porta);
})