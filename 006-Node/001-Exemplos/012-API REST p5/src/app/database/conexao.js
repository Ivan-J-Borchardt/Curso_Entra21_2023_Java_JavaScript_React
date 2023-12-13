//Mockup Maquete Modelo
const autors = [
    {id: 1, nome: "Blaise Pascal", ano: 1642, contribuicao: "Pascalina"},
    {id: 2, nome: "Charles Babbage", ano: 1833, contribuicao: "Engenho analítico"},
    {id: 3, nome: "Ada Lovelace", ano: 1833, contribuicao: "Bases da lógica de Programação"},
    {id: 4, nome: "Reynold B. Johnson", ano: 1956, contribuicao: "Disco Rígido"},
    {id: 5, nome: "Tim Berners Lee", ano: 1956, contribuicao: "World Wide Web"}
] 

function buscarAutorPorId(id) {
    return autors.filter(autor => autor.id == id)[0]
}

function buscarIndexAutorPorId(id) {
    return autors.findIndex(autor => autor.id == id)
}

function getAutors() {
    return autors
}

export {buscarAutorPorId, buscarIndexAutorPorId, getAutors}