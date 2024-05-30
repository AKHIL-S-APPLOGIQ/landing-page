import { useState } from 'react'
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navbar/>
    <div className=''>
    <Home/>
    <About/>
    <Footer/>
    </div>
    </>
  )
}

export default App
