import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Body from './components/Body'
import Home from './components/Home'
import Hero from './components/Hero'
import TransactionHistory from './components/TransactionHistory'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/history" element={<TransactionHistory />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
