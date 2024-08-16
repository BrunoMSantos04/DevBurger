import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../containers/Login'

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>,
    },
])