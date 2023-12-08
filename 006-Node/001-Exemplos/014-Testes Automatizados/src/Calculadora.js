class Calculadora{

    soma(a, b){
        return a + b
    }

    sub(a, b){
        return a - b
    }

    div(a, b){
        if(b === 0){
            throw new Error("Divisao por zero")
        }
        return a / b
    }


}

export default Calculadora