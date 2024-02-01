//Tipagem de elementos da tela (usando a interface HTML...Element)
//Input 
var num1:HTMLInputElement = document.getElementById("idNum1") as HTMLInputElement
var num2:HTMLInputElement = document.getElementById("idNum2") as HTMLInputElement
var botaoSomar:HTMLButtonElement = document.getElementById("idBtSomar") as HTMLButtonElement
var resultado:HTMLOutputElement = document.getElementById("idOut") as HTMLOutputElement



botaoSomar.onclick = ()=>{
    let res: number = Number(num1.value) + Number(num2.value)
    resultado.value = resultado.value + " " + res
}





