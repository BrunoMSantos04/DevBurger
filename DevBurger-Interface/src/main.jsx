import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={routers}/>
    <GlobalStyles/>
    <ToastContainer autoClose={3000} theme='dark' ></ToastContainer>
  </React.StrictMode>,
)
