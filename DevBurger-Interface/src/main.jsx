import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './containers/Login/index'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Login/>
    <GlobalStyles/>
    <ToastContainer autoClose={3000} theme='dark' ></ToastContainer>
  </React.StrictMode>,
)
