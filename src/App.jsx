import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Certificate from './pages/Certificate'
import ProductDetails from './pages/ProducrDetails'
import ProductSection from './pages/ProductSection'


const App = () => {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
         <Route path='/products' element={<ProductSection/>}/>
          <Route path='/products/:slug' element={<ProductDetails/>}/> 
       <Route path='/certification' element={<Certificate/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
   </BrowserRouter>
  )
}

export default App