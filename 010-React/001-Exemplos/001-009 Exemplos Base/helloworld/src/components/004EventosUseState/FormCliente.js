function FormCliente() {

    function salvarCliente(event) {
        event.preventDefault()
        console.log("Salvando Cliente...", document.getElementById("idNomeCli").value);
    }
    
    return(
        <div>
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={salvarCliente}>
                <div>
                    <input type="text" id="idNomeCli" placeholder="Nome do Cliente"/>
                </div>
                <div>
                    <input type="submit" value="Salvar"/>
                </div>

            </form>
        </div>
    )


}

export default FormCliente