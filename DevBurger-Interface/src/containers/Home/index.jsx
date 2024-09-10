import { Banner, Container, Content } from "./styles";
import {CategoryCarousel} from "../../components/CategoryCarousel"


export function Home() {


    return(
        <main>
            <Banner>
                <h1>Bem Vindo(a)!</h1>
            </Banner>
            <Container>
               <Content>
                    <CategoryCarousel>

                    </CategoryCarousel>
                    <div>
                        Carrossel Products 
                    </div> 
               </Content> 
            </Container>
        </main>
    );
}