import {useEffect, useState} from "react" 

function HookUseEffect() {
    
    const [cont, setCont] = useState(0)
    const [opcao, setOpcao] = useState()

    //1 - Roda a cada renderização
    useEffect(()=>{
        console.log("Roda a cada renderização");
    })

    //2 - Passando um array de dependencias
    useEffect(()=>{
        console.log("Só roda ao mudar o estado de um dos elementos do array");
        console.log(`Opcao Selecionada ${opcao}`);
    }, [opcao])

    //3 - Passando um array de dependencias vazio  
    useEffect(()=>{
        console.log("Executa apenas uma vez quando a página é carregada");
    }, [])

    return(
        <>
            <button onClick={event=>setCont(cont + 1)}  >ADD 1</button>
            <button onClick={event=>setOpcao("Op1")}>Opcao 1</button>
            <button onClick={event=>setOpcao("Op2")}>Opcao 2</button>
            <button onClick={event=>setOpcao("Op3")}>Opcao 3</button>
            <p>{cont}</p>
        </>
    )
}


export default HookUseEffect