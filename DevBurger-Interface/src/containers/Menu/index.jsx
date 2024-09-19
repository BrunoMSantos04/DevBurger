import { useEffect, useState } from "react";
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice';
import { Container, 
        Banner, 
        CategoryMenu, 
        ProductsContainer, 
        CategoryButton
        } from "./styles";
import { CardProduct } from "../../components/CardProduct";



export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function loadCategory() {
            const { data } =  await api.get('/category');

            const newCategories = [{id: 0, name: 'Todas'}, ...data]
            
            setCategories(newCategories)
        }


        async function newProducts() {
            const { data } =  await api.get('/products');
            const onlyOffers = data.map((product) => (
                {currencyValue: formatPrice(product.price), ...product,}
            ) )

            setProducts(newProducts)
        }



        newProducts();
        loadCategory();

    }, [])


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
                {categories.map((categories) => (
                    <CategoryButton key={CategoryButton.id} >{CategoryButton.name}</CategoryButton>
                ))}
            </CategoryMenu>


            <ProductsContainer>
                { products.map( (product) => (
                    <CardProduct product={product} key={product.id} ></CardProduct>
                ))}
            </ProductsContainer>

        </Container>
    );
}