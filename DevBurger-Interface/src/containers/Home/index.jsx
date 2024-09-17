import { Banner, Container } from "./styles";
import {CategoryCarousel} from "../../components/CategoryCarousel"
import { OffersCarousel } from "../../components/OffersCarousel";


export function Home() {


    return(
        <main>
            <Banner>
                <h1>Bem Vindo(a)!</h1>
            </Banner>
            <Container>
               <div>
                    <CategoryCarousel></CategoryCarousel>
                    <OffersCarousel></OffersCarousel>
               </div> 
            </Container>
        </main>
    );
}