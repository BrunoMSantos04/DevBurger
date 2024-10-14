import { Banner, Container } from "./styles";
import {CategoryCarousel, OffersCarousel} from "../../components"
import { useUser } from "../../hooks/userContext";

export function Home() {

console.log(useUser())
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