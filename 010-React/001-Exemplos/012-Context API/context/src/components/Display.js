import { useContext, useEffect, useState } from "react"
import { CountContext } from "../contexts/CountContext"

function Display() {

    const [contDobro, setContDobro] = useState(0)

    const {cont} = useContext(CountContext)

    useEffect(()=>{
        setContDobro(cont * 2) 
    }, [cont])

    return(
        <div>
            <p>{contDobro}</p>
        </div>
    )
    
}

export default Display