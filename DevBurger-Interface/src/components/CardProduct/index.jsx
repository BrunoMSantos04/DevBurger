import PropTypes from 'prop-types'
import { CardImage, Container } from './styles'
import { CardButton } from '../CardButton'


export function CardProduct( { product } ) {


    return (
        <Container>
            <CardImage src = {product.url} alt={product.name}></CardImage>
            <div>
                <p>{product.name}</p>
                <strong>{product.price}</strong>
            </div>
            <CardButton></CardButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}