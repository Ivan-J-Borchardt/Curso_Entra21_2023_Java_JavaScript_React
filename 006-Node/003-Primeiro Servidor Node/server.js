const http = require("http")

const servidor = http.createServer(function(req, resp){
    var resposta = 20

    resp.end(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Olá Pessoal!!!!</h1>
                    <p>Resposta a: ${resposta}</p>
                </body>
            </html>
        `
    )
})

servidor.listen(3001)