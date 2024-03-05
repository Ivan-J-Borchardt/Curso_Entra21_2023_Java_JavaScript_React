import { useState } from "react"
function MyFunctionComponent(props) {
   const [cont, setCont] = useState(0)

   function incCont() {
        setCont(cont + 1)
   }

    return (
        <div>
            <p>Olá {props.nome}</p>
            <p>{cont}</p>
            <button onClick={incCont}>Add</button>
        </div>
    ) 
}

export default MyFunctionComponent