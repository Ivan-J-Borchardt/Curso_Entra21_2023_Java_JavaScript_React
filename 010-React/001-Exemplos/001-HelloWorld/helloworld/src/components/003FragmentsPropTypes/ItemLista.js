import PropTypes from 'prop-types'

function ItemLista({marca, modelo, ano}) {
    return(
        <li>{marca} - {modelo} - {ano}</li>
    )
}

ItemLista.propTypes = {
    marca : PropTypes.string.isRequired, 
    modelo: PropTypes.string,
    ano: PropTypes.number
}

ItemLista.defaultProps = {
    marca: 'Inserir Marca', 
    ano: 0
}

export default ItemLista