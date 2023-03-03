import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import Products from './components/Products';
import Admin from './components/admin/Admin';
import AddProduct from './components/AddProducts';
import EditProduct from './components/EditProducts';
import Logout from './components/Form/Logout';



export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/addproduct' element={<AddProduct />} />
      
        <Route path='/editproduct' element={<EditProduct />} />


      </Routes>
    </div>
  )
}
