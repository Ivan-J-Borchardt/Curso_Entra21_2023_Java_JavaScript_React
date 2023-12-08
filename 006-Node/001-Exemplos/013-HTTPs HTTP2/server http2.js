import fs from "fs"
//import https from "https"
import spdy from "spdy"
import express from "express"

const app = express()

app.get("/", (req, res)=>{
    res.send("Olá, via Express")
})


app.listen(3001, ()=>{
    console.log(`Servidor rodando em http://localhost:${3001}`);
}) 

const server = spdy.createServer({
    key: fs.readFileSync("privatekey.pem", "utf-8"),
    cert: fs.readFileSync("certificate.pem", "utf-8")
}, app)


const PORT = process.env.PORT || 3002
server.listen(PORT, ()=>{
    console.log(`Servidor rodando em https://localhost:${PORT}`);
})