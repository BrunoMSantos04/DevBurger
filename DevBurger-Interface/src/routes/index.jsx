import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../containers/Login'
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'

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
])