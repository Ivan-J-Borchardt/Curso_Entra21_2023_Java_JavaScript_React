import Login from "./Login"

function RenderCond(props) {

    const isLogado = props.isLogado

    if (isLogado) {
        return (
            <div>
                <h2>Renderização Condicional 1</h2>
                <h2>Bem vindo {props.nome}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Exemplo 1 Renderização Condicional</h2>
                <Login />
            </div>
        )
    }
}

export default RenderCond