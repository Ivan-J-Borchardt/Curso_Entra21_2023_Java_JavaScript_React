import { useState } from "react"
import Botao from "../004EventosUseState/Botao"

function RenderListas3(params) {

    //const navegadores = ['IE', 'Chrome', 'Firefox', 'Opera', 'Netscape']
    const navegadores = []

    const [navegador, setNavegador] = useState(navegadores[0])

    function imprimirNavegador() {
        console.log(`Navegador: ${navegador}`);
    }


    return (
        <div>
            <h1>Renderização Lista - Select</h1>
            <select name="nmSelect" id="idSelect" onChange={(event) => setNavegador(event.target.value)}>
                {navegadores.length > 0 ? (
                    navegadores.map((navegador, index) => {
                        return (
                            <option key={index}>{navegador}</option>
                        )
                    })
                ) : (
                    <option key={0}>Falha ao Carregar Navegadores</option>
                )}


            </select>
            <Botao event={imprimirNavegador} text="Capturar" />
        </div>
    )

}

export default RenderListas3