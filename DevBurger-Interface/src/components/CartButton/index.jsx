import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles'

export function CartButton(...props) {

return (
    <ContainerButton {...props}>
        <img src={Cart} alt='carrinho'></img>
    </ContainerButton>
)

}