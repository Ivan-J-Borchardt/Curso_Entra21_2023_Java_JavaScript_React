import Textos from "../src/Textos.Js" 

describe("Textos.js", ()=>{
    test("Funcao Concatenar(a, b), dado a='AB' e b= 'BC', o resultado esperado é 'ABBC'", ()=>{
        let text = new Textos()
        expect(text.concatenar("AB", "BC")).toBe("ABBC")
    })
})