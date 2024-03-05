function FormUsuario() {

    function salvar() {
        console.log("Salvando...:", document.getElementById("idNome").value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="idNome" className="form-label">Nome:</label>
                <input type="text" id="idNome" className="form-control" />
            </div>
            <button onClick={salvar} >Salvar</button>
        </>
    )
}

export default FormUsuario