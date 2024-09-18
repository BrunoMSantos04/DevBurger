import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../containers/Login'
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'
import { Menu } from '../containers/Menu'

export const routers = createBrowserRouter([
    
    {
        path: '/',
        element: <Home></Home>,
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
        element: <Menu></Menu>,
    },
])