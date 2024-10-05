import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../containers/Login'
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'
import { Menu } from '../containers/Menu'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cart } from '../containers/Cart'



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