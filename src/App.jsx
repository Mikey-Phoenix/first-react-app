import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Career from './pages/career'
import Products from './pages/products'
import Header from './components/header'
import Footer from './components/footer'

function NavBar() {
  return ( 
    <div className='w-full p-5 flex justify-evenly bg-gray-800 text-white'>
      <Link className='hover:text-blue-600' to={"/"}>Home</Link>
      <Link className='hover:text-blue-600' to={"/about"}>About</Link>
      <Link className='hover:text-blue-600' to={"/career"}>Career</Link>
      <Link className='hover:text-blue-600' to={"/products"}>Products</Link>
    </div>
  )
 
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Header /> */}
      {/* <main>Hello World</main> */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
