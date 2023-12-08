import Calculadora from "../src/Calculadora.js"

describe("Testes Calculadora.js", ()=>{
    it("Funcao soma(a, b) - dado a = 1, b = 2, o resultado esperado eh 3", ()=>{
        let calc = new Calculadora()
        let resul = calc.soma(1, 2)
        expect(resul).toEqual(3)
        expect(typeof(resul)).toEqual("number")
    })

    test("Funcao sub(a, b) - dado a = 1, b = 2, o resultado esperado eh -1", ()=>{
        let calc = new Calculadora()
        expect(calc.sub(1, 2)).toEqual(-1)
    })

    test("Funcao div(a, b) - dado a = 3 e b= 2, o resultado esperado eh 1.5", ()=>{
        let calc = new Calculadora()
        expect(calc.div(3, 2)).toBe(1.5)
    })

    test("Funcao div(a, b) - dado a = 3 e b= 0,  é esperado que lance o Erro 'Divisão por Zero'", ()=>{
        let calc = new Calculadora()
        expect(()=>{
            calc.div(3, 0)
        }).toThrow()
    })

})  