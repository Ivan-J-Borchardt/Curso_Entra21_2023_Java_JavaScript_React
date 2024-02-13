import { useNavigate } from "react-router-dom";

function Contato() {

    const navigate = useNavigate()
    function voltarHome(){
        navigate("/")
    }

    return(
        <div>
            <h1>Contato</h1>
            <p>Formulário de Contato</p>
            <button onClick={voltarHome}>Home</button>
        </div>
    )
}

export default Contato