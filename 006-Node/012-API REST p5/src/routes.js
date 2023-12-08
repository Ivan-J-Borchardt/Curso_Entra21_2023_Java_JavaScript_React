import { Router } from "express";
import AutorController from "./app/controllers/AutorController.js"

const router = Router()

//Consultando Autores/Autor (Read)
router.get("/autor", AutorController.index)
router.get("/autor/:id", AutorController.show)
//Salvando autor (Create)
router.post("/autor", AutorController.store)
//Alterando Autor (Update)
router.put("/autor/:id", AutorController.update)
//Apagando Autor (Delete)
router.delete("/autor/:id", AutorController.delete)



export default router