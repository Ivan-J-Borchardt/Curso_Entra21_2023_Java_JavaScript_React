const fs = require("fs/promises")

const config = {
    param1: "Parametro1", 
    param2: 1234, 
    param3: "Direita"
}

//salvar(JSON.stringify(config))
adicionarDado(JSON.stringify(config))
lerArquivo()

async function salvar(dado) {
    await fs.writeFile("config.txt", dado)
}

async function adicionarDado(dado) {
    await fs.appendFile("config.txt", dado + "\n")
}

async function lerArquivo() {
    const dado = await fs.readFile("config.txt", "utf-8")

    
    console.log(dado);
    console.log(JSON.parse(dado).param1);
}