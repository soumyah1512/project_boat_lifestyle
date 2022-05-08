import React from 'react'
import { Route, Routes } from 'react-router'
import { Footer } from '../Components/Footer'
import { HomePage } from '../Components/homepage/HomePage'
import { Navbar } from '../Components/Navbar/Navbar'
import Cart from '../Components/cart/Cart'
import { Login } from '../Components/Login'
import { Register } from '../Components/Register'
import Shop from '../Components/shop/Shop'
import { CartProvider } from 'react-use-cart'
import { Thanks } from '../Components/Thanks'

const MainR = () => {
  return (
    <><CartProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/account/login" element={<Login/>}/>
            <Route path="/account/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path='/paymentdone' element={<Thanks/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
    </>
  )
}

export default MainR