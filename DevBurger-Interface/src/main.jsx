import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import AppProvider from './hooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routers}/>
      <GlobalStyles/>
      <ToastContainer autoClose={3000} theme='dark' ></ToastContainer>
    </AppProvider>
  </React.StrictMode>,
)
