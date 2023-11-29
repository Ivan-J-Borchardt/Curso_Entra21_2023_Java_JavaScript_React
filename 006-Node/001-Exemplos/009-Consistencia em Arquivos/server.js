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
    try {
        const dado = await fs.readFile("config.txt", "utf-8")

    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }



    console.log(dado);
    console.log(JSON.parse(dado).param1);
}

//Trabalhando com um arquivo csv
async function lerUsers() {

    var  users
    try {
        users = await fs.readFile("users1.csv", "utf-8")
        const user = users.split("\r\n")
        const userDetails = []
    
        user.forEach(element => {
            //userDetails.push(element.split(","))
            let userArray = element.split(",")
    
            let user = {
                userId: userArray[0],
                nome: userArray[1],
                linguagem: userArray[2],
                ano: userArray[3]
            }
    
            userDetails.push(user)
    
            console.log(user);
        })
    
        console.log(userDetails);
    
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        console.log(error);
    }





}
