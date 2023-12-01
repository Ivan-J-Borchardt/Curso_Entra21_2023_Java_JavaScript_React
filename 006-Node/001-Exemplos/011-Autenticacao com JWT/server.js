import express from "express"
import jwt from "jsonwebtoken"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SECRET = process.env.SECRET || "dfghj&%$GHH5/hbj54"
const app = express()


app.use(express.json())

function verificarJWT(req, res, next) {
    const token = req.header("x-access-token")

    const indexTokenBlack = blacklist.findIndex(tokenLista => tokenLista == token)

    if (indexTokenBlack > -1) {
        res.status(401).end()
    }

    jwt.verify(token, SECRET, function(error, decoded) {
        if (error) {
            res.status(401).end()
        }

        next()
    })
    
}

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/front.html")
})

app.get("/user", verificarJWT,  (req, res)=>{
    res.status(200).send("Lista de usuarios")
})


app.post("/login", (req, res)=>{

    if (req.body.user == "FT012" && req.body.password == "SohEuSei") {

        const token = jwt.sign({userId: 123}, SECRET, {expiresIn: 60})

        res.status(200).json({auth: true, token})
    } 

    res.status(403).end()
    
})

const blacklist = []
app.post("/logout", (req, res)=>{
    blacklist.push(req.header("x-access-token"))
    res.status(200).end()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`); 
})