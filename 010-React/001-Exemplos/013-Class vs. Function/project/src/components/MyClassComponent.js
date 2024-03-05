import { Component } from "react"

export class MyClassComponent extends Component {



    constructor(props){
        super(props)
        this.cor = "Vermelho"
        this.state={
            contador : 0
        }
        
        this.contar = this.incCont.bind(this)

    }

    incCont(){
        //this.state.contador++
        this.setState({contador:++this.state.contador})
        console.log(this.state.contador);
    }

    render(){
        return(
            <div>
                <p>Olá {this.props.nome}</p>
                <p>{this.cor}</p>
                <p>{this.state.contador}</p>
                <button onClick={()=>this.incCont()}>Add</button>
                <button onClick={this.contar}>Add com Bind</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("Componente criado...");
    }

    componentDidUpdate(){
        console.log("Componente atualizado...");
    }

    componentWillUnmount(){
        console.log("Componente desmontado...");
    }

    componentDidCatch(){
        console.log("Componente deu Erro...");
    } 

}

/** Ciclo de Vida 
 * 
 * Na montagem, quando uma instância do componente está sendo criada no DOM
 * 
 * 1. constructor()
 * 2. static getDerivedStateProps()
 * 3. render()
 * 4. componenteDidMount()
 * 
 * Na atualização do componente, por alterações causadas em props ou state,
 * quando o componente está sendo renderizado
 * 
 * 1. static getDerivedStateFromProps()
 * 2. shouldComponenteUpdate()
 * 3. render()
 * 4. getSnapshotBeforeUpdate()
 * 5. componentDidUpdate()
 * 
 * Na desmontagem, quando o componente está sendo removido do DOM
 * 
 * 1. componentWillUnmount()
 * 
 * Em tratamento de erros, quando existir algum erro em algum momento 
 * no componente
 * 
 * 1. static getDerivedStateFromError()
 * 2. componentDidCatch() 
 * 
 */

