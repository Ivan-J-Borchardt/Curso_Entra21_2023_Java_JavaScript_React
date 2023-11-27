const express = require("express")
const fs = require("fs/promises")
const path = require("path")

const app = express()

app.use(express.urlencoded({extended: false})) 
app.use(express.json())

app.use(express.static(path.join(__dirname, "View")))


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/view/index.html"))
})


app.get("/cargainicial", async (req, res)=>{

    //1. Ler Arquivo Config.csv
    const candidatosData = await fs.readFile("config.csv", "utf-8")

    
    //2. "Quebrar" o arquivo em um array de usuarios 
    const candidatos = candidatosData.split("\r\n")
    
    
    //3. "Quebrar" a linha(elemento do array do item 2) em dados do candidato (array)
    const candidatosDetails = []
    candidatos.forEach(candidato =>{
        let candidatoDados = candidato.split(",")

        let candidatoObj = {
            tipoEleicao: candidatoDados[0],
            numeroCandidato : candidatoDados[1], 
            nomeCandidato: candidatoDados[2],
            urlFoto: candidatoDados[3]
        }
        candidatosDetails.push(candidatoObj)
    })    
    
    //4. Responder o array de candidatos
    res.send(candidatosDetails)

})

app.post("/voto", async (req, res)=>{
    //1. Capturar os dados vindos do Frontend 
    let dado = JSON.stringify(req.body)

    //2. Converter dados para formato .csv

    //3. Salvar os dados no arquivo votacao.csv
    await fs.appendFile("votacao.txt", dado + "\n")

    res.json({
        "Status" : "200",
        "mensagem" : "Voto Registrado Com sucesso"
       })
})


const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Servidor Urna Eletrônica rodando na porta ${PORT}`);
})