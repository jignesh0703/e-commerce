import React, { useState } from 'react'
import Navbar from './Componets/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom';
import Product_page from './pages/Product_page';
import Wishlist from './pages/Wishlist';
import Signup_Login from './Componets/Signup_Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [wishlist, setwishlist] = useState(true)
  const [showlogin, setshowlogin] = useState(false)

  return (
    <>
      <Navbar setwishlist={setwishlist} wishlist={wishlist} setshowlogin={setshowlogin} />
      {
        showlogin ? <Signup_Login setshowlogin={setshowlogin} /> : <></>
      }
      <Routes>
        <Route path='/' element={<Home wishlist={wishlist} />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/product/:id" element={<Product_page />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="custom-toast-container"
      />

    </>
  )
}

export default App