"use strict";
//Tipagem de elementos da tela (usando a interface HTML...Element)
//Input 
var num1 = document.getElementById("idNum1");
var num2 = document.getElementById("idNum2");
var botaoSomar = document.getElementById("idBtSomar");
var resultado = document.getElementById("idOut");
botaoSomar.onclick = () => {
    let res = Number(num1.value) + Number(num2.value);
    resultado.value = resultado.value + " " + res;
};
