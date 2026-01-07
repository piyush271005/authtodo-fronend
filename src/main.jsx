import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import './index.css'
import App from './App.jsx'
import Register from './components/Register/Register.jsx'
import Layout from './layout.jsx'
import Login from './components/Login/Login.jsx'
import MainPage from './components/mainpage/MainPage.jsx'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Protected } from './components/protected/protected.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout />}>

        <Route path='home' element ={<Home />}/>
        <Route path='Register' element ={<Register />}/>
        <Route path='Login' element ={<Login />}/>
        <Route path='' element ={<MainPage />}/>

        
    
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
