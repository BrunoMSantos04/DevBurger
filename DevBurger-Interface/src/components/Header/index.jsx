import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content } from './styles'
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";


export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>home</HeaderLink>
            <HeaderLink>cardapio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color='#fff' size={24} />
            <div>
              <p>Olá, <span>Cliente</span></p>
              <Logout>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color='#fff' size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}