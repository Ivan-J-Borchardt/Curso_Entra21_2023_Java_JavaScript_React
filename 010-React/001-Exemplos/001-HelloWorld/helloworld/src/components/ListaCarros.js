import ItemLista from "./ItemLista"

function ListaCarros() {
    return(
        <>
            <h1>Lista de Carros</h1>
            <ul>
                <ItemLista modelo="Ford Ka"  ano={2015} />
                <ItemLista modelo="EcoSport" marca="Ford" ano={2020} />
                <ItemLista modelo="Tiguan" marca="Volkswagen" ano={2020} />
                <ItemLista modelo="Fusca" marca="Volkswagen"  />
            </ul>
        </>
    )
}

export default ListaCarros