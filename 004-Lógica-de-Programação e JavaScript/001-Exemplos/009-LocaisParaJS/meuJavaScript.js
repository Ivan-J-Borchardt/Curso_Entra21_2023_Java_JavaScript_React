alert("Bloqueio D")

console.log("Passou Aqui");

var bt = document.getElementById("idBt")

bt.onclick = function(){
    console.log(document.getElementById("idIn").value);
}