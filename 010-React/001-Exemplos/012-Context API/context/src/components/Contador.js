import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

function Contador() {

    const {cont, setCont} = useContext(CountContext)


    function incrementaCount() {
        setCont(cont + 1)
        console.log(cont);
    }
    
    return (
        <>
            <h2>{cont}</h2>
            <button onClick={incrementaCount}>ADD</button>
        </>
    )
}

export default Contador