import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SplashCursor from './components/SplashCursor'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <SplashCursor />
      <Navbar />
      <Home/>
      
    </main>
  )
}

export default App
