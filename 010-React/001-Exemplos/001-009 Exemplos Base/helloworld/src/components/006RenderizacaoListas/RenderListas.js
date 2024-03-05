function RenderListas() {

    const navegadores = ['IE', 'Chrome', 'Firefox', 'Opera', 'Edge', 'Safari']

    return(
        <div>
            <h2>Exemplo Render Lista 1 - UL</h2>
            <ul>
                {navegadores.map((navegador, index)=>{return(
                    <li key={index}>{navegador}</li>
                )})}
            </ul>
        </div>

    )
}

export default RenderListas