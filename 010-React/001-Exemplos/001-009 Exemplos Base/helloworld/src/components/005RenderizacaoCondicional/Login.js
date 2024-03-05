import {useState} from "react"
import Botao from "../004EventosUseState/Botao"


function Login(params) {

    function logar() {
        console.log(`Loggin ${userName} - ${password}`);
    }

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()


    return(
        <form>
            <label htmlFor="idUser">User</label><br/>
            <input type="Text" 
                   id="idUser"
                   onChange={event=>setUserName(event.target.value)}
            />
            <br/><br/>
            <label htmlFor="idPass">Senha</label><br/>
            <input type="password" 
                   id="idPass"
                   onChange={event=>setPassword(event.target.value)}
            />
            <br/><br/>
            <Botao event={logar} text="Login"/>

        </form>

    )
}

export default Login