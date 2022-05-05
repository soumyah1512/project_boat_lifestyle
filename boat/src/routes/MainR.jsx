import React from 'react'
import { Route, Routes } from 'react-router'
import { Footer } from '../Components/Footer'
import { HomePage } from '../Components/homepage/HomePage'
import { Navbar } from '../Components/Navbar/Navbar'
import Cart from '../Components/cart/Cart'
import { Login } from '../Components/Login'
import { Register } from '../Components/Register'

const MainR = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={
            <><HomePage/><Footer/></>}/>
            <Route path="/account/login" element={
                <><Login/><Footer/></>}/>
            <Route path="/account/register" element={
                <><Register/><Footer/></>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
    </>
  )
}

export default MainR