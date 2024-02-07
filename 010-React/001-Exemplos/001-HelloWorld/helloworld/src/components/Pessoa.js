function Pessoa({nome, idade, cpf, foto}) {
    
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>CPF: {cpf}</p>        
        </div>
    )

}

export default Pessoa