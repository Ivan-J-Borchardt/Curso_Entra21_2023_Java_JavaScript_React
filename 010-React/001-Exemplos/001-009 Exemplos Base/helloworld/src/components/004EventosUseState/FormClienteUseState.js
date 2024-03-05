import {useState} from 'react'

 
function FormClienteUseState() {

    function salvarCliente(event) {
        event.preventDefault()
        //console.log("Salvando Cliente...", document.getElementById("idNomeCli").value);
        console.log("Nome do Cliente capturado pelo Hook useState:..", nomeCli);
    
    }
    
   
    const [nomeCli, setNomeCli] = useState("Tim Berners-Lee")


    return(
        <div>
            <h1>Cadastro de Cliente usando UseState</h1>
            <form onSubmit={salvarCliente}>
                <div>
                    <input 
                        type="text" 
                        id="idNomeCli" 
                        placeholder="Nome do Cliente"
                        value={nomeCli}
                        onChange={function(event){ setNomeCli(event.target.value)}}
                    />
                </div>
                <div>
                    <input type="submit" value="Salvar"/>
                </div>

            </form>
        </div>
    )


}

export default FormClienteUseState