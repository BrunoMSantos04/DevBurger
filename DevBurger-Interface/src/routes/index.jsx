import { createBrowserRouter } from 'react-router-dom'
import { Login, Cart, Home, Menu, Register } from '../containers'
import { Header, Footer } from '../components'



export const routers = createBrowserRouter([
    
    {
        path: '/',
        element: 
        (
            <>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
            </>
        )
        
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/cadastro',
        element: <Register></Register>,
    },
    {
        path: '/cardapio',
        element: 
        (
            <>
                <Header></Header>
                <Menu></Menu>
                <Footer></Footer>
            </>
        )
        
    },
    {
        path: '/carrinho',
        element: <Cart></Cart>,
    },
])