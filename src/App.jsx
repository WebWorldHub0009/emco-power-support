import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
   </BrowserRouter>
  )
}

export default App