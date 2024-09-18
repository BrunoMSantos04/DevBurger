import { Container, 
        Banner, 
        CategoryMenu, 
        ProductsContainer 
        } from "./styles";



export function Menu() {


    return(
        <Container>
            <Banner>
                <h1>O melhor 
                    <br/> hambúger 
                    <br/> está aqui! 
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>
            
            <CategoryMenu>

            </CategoryMenu>

            <ProductsContainer>

            </ProductsContainer>

        </Container>
    );
}