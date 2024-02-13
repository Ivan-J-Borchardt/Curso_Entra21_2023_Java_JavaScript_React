import {useState} from "react" 
import ComponenteFilho1 from "./ComponenteFilho1"
import ComponenteFilho2 from "./ComponenteFilho2"

function ComponentePai(params) {

    const [nome, setNome] = useState()
    return(
        <>
            <h1>Elevando o State</h1>
            <ComponenteFilho1 setNome={setNome} nome={nome} />
            <ComponenteFilho2 nome={nome}/>
            <p>{nome}</p>
        </>
    )
}

export default ComponentePai