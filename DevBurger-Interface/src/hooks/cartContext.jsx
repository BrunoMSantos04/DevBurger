import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)
        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts;

            newProductsInCart[cartIndex].quantity += newProductsInCart[cartIndex].quantity + 1

            setCartProducts(newProductsInCart)
        } else {
            product.quantity = 1
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart);
        }

        updateLocalStorage(newProductsInCart)
    }

    const clearCart = () => {

    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId.id)
        setCartProducts(newCart)

        updateLocalStorage(newCart)
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map( (prd) => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1} : prd;
        })

        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map( (prd) => {
                return prd.id === productId ? {...prd, quantity: prd.quantity - 1} : prd;
            })

            setCartProducts(newCart)
            updateLocalStorage(newCart)
        } else {
            deleteProduct(productId)
        }

    }

    const  updateLocalStorage = (product) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(product))
    };

    useEffect(() => {
        const loadProducts = () => {
            const clientCartData = localStorage.getItem('devburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }
    }, [])
    

    return (
        <CartContext.Provider
            value={{ cartProducts, putProductInCart, clearCart, decreaseProduct, increaseProduct, deleteProduct }}
        >

        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context) {
        throw new Error('useCart must be used with a context')
    }

    return context
}