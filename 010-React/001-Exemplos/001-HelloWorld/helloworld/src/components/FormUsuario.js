function FormUsuario() {

    function salvar() {
        console.log("Salvando...:", document.getElementById("idNome").value);
    }

    return(
        <>
            <div>
                <label htmlFor="idNome">Nome:</label>
                <input type="text" id="idNome"/>
            </div>
            <button onClick={salvar} >Salvar</button>
        </>
    )
}

export default FormUsuario