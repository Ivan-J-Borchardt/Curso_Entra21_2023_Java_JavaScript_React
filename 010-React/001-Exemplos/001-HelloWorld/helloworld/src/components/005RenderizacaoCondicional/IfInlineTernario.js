import Login from "./Login"

function IfInlineTernario(props) {

    const isLogado = props.isLogado

    return (
        <div>
            <h2>Exemplo 3 Renderização Condicional</h2>
            {isLogado ? (
                <div>
                    <h2>Bem vindo {props.nome}</h2>
                </div>
            ):(
                <div>
                     <Login />
                </div>
            )}
        </div>

    )




}

export default IfInlineTernario