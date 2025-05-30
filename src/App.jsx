import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Body from './components/Body'
import Home from './components/Home'
import Hero from './components/Hero'
import TransactionHistory from './components/TransactionHistory'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="" element={<Hero />} />
            <Route path="/history" element={<TransactionHistory />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
