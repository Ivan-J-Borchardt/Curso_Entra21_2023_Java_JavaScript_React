import app from "./src/app.js"
import https from "https"
import fs from "fs"


const server = https.createServer({
    key:  fs.readFileSync("privatekey.pem", "utf-8"),
    cert: fs.readFileSync("certificate.pem", "utf-8")
}, app)


const PORT_HTTPS = process.env.PORT_HTTPS || 3000
server.listen(PORT_HTTPS, ()=>{
    console.log(`Server Rodando em https://localhost:${PORT_HTTPS}`);
} )


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server Rodando em http://localhost:${PORT}`);
} )