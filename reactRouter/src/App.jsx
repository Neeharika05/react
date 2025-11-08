import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/home'
import Footer from './components/foorter'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
