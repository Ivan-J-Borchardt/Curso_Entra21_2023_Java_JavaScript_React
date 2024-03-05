import Login from "./Login"

function IfInline(props) {

    const isLogado = props.isLogado


    return (
        <div>
            <h2>Exemplo 2 Renderização Condicional</h2>
            {isLogado && (
                <div>
                    <h2>Bem vindo {props.nome}</h2>
                </div>)
            }
            {!isLogado && (
                <div>
                     <Login />
                </div>)
            }
        </div>

    )




}

export default IfInline