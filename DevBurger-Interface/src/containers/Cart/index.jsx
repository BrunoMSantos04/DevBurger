import Logo from '../../assets/Logo.png'
import { Banner, Container, Content, Title } from './styles'

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo"/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CartItens></CartItens>
                <CartResume></CartResume> */}
            </Content>
        </Container>
    )
}
