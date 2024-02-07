import Mensagem from "./Mensagem"

function Card() {

    const fnUser = "Analista"
    return(
        <div>
            <img src="https://github.com/Ivan-J-Borchardt/imagens/blob/master/porfavor.jpg?raw=true"/>    
            <p>Sr. Fulando de Tal</p>
            <Mensagem funcao={fnUser}/>    
        </div>
    )

}

export default Card