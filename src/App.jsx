import React, { useState } from "react"
import "./App.scss"
import Navbar from "./components/Navbar/Navbar"
import Cards from "./CardManager/Cards/Cards"
import AddCard from "./CardManager/AddCard/AddCard"
import EditCard from "./CardManager/EditCard/EditCard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Login from "./components/LoginForm/Login"
import Register from "./components/RegisterForm/Register"
import Customer from './components/Customer/Customer';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/cards/:id/edit" element={<EditCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/customer' element={<Customer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
