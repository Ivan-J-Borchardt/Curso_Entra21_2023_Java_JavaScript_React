

function ComponenteFilho1({setNome, nome}) {

    

    return(
        <div>
            <label htmlFor="idNomeP">Nome:</label>
            <input type="text"
                   id="idNomeP"
                   value={nome}
                   onChange={event=>setNome(event.target.value)}
            />
        </div>
    )

    
}

export default ComponenteFilho1