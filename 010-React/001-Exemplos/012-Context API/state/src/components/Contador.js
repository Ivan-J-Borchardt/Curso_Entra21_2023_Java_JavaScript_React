
function Contador({cont, setCont}) {



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