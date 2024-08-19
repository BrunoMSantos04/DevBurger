import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../containers/Login'
import { Register } from '../containers/Register'

export const routers = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/cadastro',
        element: <Register></Register>,
    },
])