import { Table } from '../index'
import { useCart } from '../../hooks/cartContext'
import { ButtonGroup, EmptyCart, ProductImage } from './styles'

export function CartItens() {

    const { cartProducts, decreaseProduct, increaseProduct } = useCart()

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>      
                </Table.Tr>          
            </Table.Header>   

            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id} >
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>

                            <Table.Td>
                                {product.name}
                            </Table.Td>

                            <Table.Td>
                                {product.currencyValue}
                            </Table.Td>

                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreaseProduct(product.id)} > - </button>
                                        {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)} > + </button>
                                </ButtonGroup>
                            </Table.Td>

                            <Table.Td>
                                { formatPrice( product.quantity * product.price)}
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmptyCart>Carinho Vazio</EmptyCart>}
            </Table.Body>

        </Table.Root>

    )
}