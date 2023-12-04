import express from "express"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

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

//Consultando Autores/Autor (Read)
app.get("/autor", (req, res)=>{
    //lógica de consulta ao Banco de dados 
    //autors 
    res.status(200).send(autors)
})

app.get("/autor/:id", (req, res)=>{
    //lógica de consulta ao Banco de dados 
    //autors 
    let autor = buscarAutorPorId(req.params.id)
    res.status(200).json(autor)
})

//Salvando autor (Create)
app.post("/autor", (req, res)=>{
    autors.push(req.body)
    res.status(201).send("Autor cadastrado com sucesso")
})

//Alterando Autor (Update)
app.put("/autor/:id", (req, res)=>{
    let indexAutor = buscarIndexAutorPorId(req.params.id)
    autors[indexAutor].nome = req.body.nome
    autors[indexAutor].ano = req.body.ano
    autors[indexAutor].contribuicao = req.body.contribuicao
    res.status(200).json(autors[indexAutor])
})

//Apagando Autor (Delete)
app.delete("/autor/:id", (req, res)=>{
    let indexAutor = buscarIndexAutorPorId(req.params.id)
    autors.splice(indexAutor, 1)
    res.status(200).send(`Autor ${req.params.id} excluído com sucesso!`)
})

export default app 