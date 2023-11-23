const fs = require("fs/promises")

const config = {
    param1: "Parametro1", 
    param2: 1234, 
    param3: "Direita"
}

//salvar(JSON.stringify(config))
//adicionarDado(JSON.stringify(config))
//lerArquivo()
lerUsers()

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

//Trabalhando com um arquivo csv
async function lerUsers(){
    const users = await fs.readFile("users.csv", "utf-8")
    const user = users.split("\r\n")
    const userDetails = []

    user.forEach(element => {
        //userDetails.push(element.split(","))
        let userArray = element.split(",")

        let user = {
            userId : userArray[0], 
            nome : userArray[1],
            linguagem : userArray[2],
            ano: userArray[3]
        }

        userDetails.push(user)

        console.log(user);
    })

    console.log(userDetails);
}
