var candidatos

(async function(){
    candidatos = await cargaInicial()


    console.log(candidatos[0].tipoEleicao);

    if (candidatos[0].tipoEleicao == "a") {
        document.getElementById("idCpf").hidden = true
    }

})()


numeroCandidato = document.getElementById("inumeroCandidato")

numeroCandidato.onchange = function() {
   console.log(numeroCandidato.value); 

    let cand = candidatos.filter((value)=>{
        return value.numeroCandidato == numeroCandidato.value
    })

    if (cand.length == 1) {
        document.getElementById("idNome").innerText = cand[0].nomeCandidato
        document.getElementById("idFoto").src = cand[0].urlFoto
        document.getElementById("idFoto").alt = cand[0].nomeCandidato
    }else{
        document.getElementById("idNome").innerText = "Candidato"
        document.getElementById("idFoto").src = "img/politico.png"
        document.getElementById("idFoto").alt = "imagem do candidato"
    }
    

} 

async function cargaInicial() {
   const res =  await fetch("http://localhost:3000/cargainicial")

   return res.json()  
}