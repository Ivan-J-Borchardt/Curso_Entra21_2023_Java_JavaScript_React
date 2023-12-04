import express from "express"
import AutorController from "./app/controllers/AutorController.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//Consultando Autores/Autor (Read)
app.get("/autor", AutorController.index)
app.get("/autor/:id", AutorController.show)
//Salvando autor (Create)
app.post("/autor", AutorController.store)
//Alterando Autor (Update)
app.put("/autor/:id", AutorController.update)
//Apagando Autor (Delete)
app.delete("/autor/:id", AutorController.delete)

export default app 