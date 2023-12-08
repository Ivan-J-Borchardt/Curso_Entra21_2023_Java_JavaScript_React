import express from "express"

const app = express()
app.use(express.json())

app.get("/user", (req, res)=>{
    res.status(200).json({msn:"Ola"})
})

app.post("/user", (req, res)=>{
    res.status(201).json({id: req.body.id, nome: req.body.nome})
})


app.delete("/user", (req, res)=>{
    res.status(200).json({msn:"User deletado com sucesso"})
})

app.put("/user", (req, res)=>{
    res.status(200).json({id: req.body.id, nome: req.body.nome})
})

export default app