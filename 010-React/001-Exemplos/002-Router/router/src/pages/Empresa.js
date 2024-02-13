import { Link } from "react-router-dom"
function Empresa() {
    return(
        <div>
            <h1>Empresa</h1>
            <p>Encontre aqui todas as informações <Link to="/info">sobre</Link> nossa empresa</p>
        </div>
    )
}

export default Empresa