function RenderNull(props) {

    if (!props.err) {
        return null
    }

    return(
        <div>
            <p>Erro: {props.msn} </p>
        </div>
    )
    
}

export default RenderNull