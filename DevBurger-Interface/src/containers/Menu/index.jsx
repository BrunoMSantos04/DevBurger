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
import { useNavigate } from "react-router-dom";



export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState([0])
    const [FilteredProducts, setFilteredProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function loadCategory() {
            const { data } =  await api.get('/category');

            const newCategories = [{id: 0, name: 'Todas'}, ...data]
            
            setCategories(newCategories)
        }


        async function loadProducts() {
            const { data } =  await api.get('/products');
            const newProducts = data.map((products) => (
                {currencyValue: formatPrice(products.price), ...products,}
            ) )

            setProducts(newProducts)
        }



        loadProducts();
        loadCategory();

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (products) => products.category.id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }   

    }, [products, activeCategory])
    


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
                {categories.map((category) => (
                    <CategoryButton 
                    key={category.id} 
                    $IsActiveCategory={category.id === activeCategory}
                    onClick={() => {
                        navigate(
                            {
                                pathname: '/cardapio',
                                search: `?categorias=${category.id}`,
                            },
                            {
                                replace: true,
                            },                            
                        )
                        setActiveCategory(category.id)
                    }}
                    
                    >{CategoryButton.name}</CategoryButton>
                ))}
            </CategoryMenu>


            <ProductsContainer>
                { FilteredProducts.map( (products) => (
                    <CardProduct product={products} key={products.id} ></CardProduct>
                ))}
            </ProductsContainer>

        </Container>
    );
}