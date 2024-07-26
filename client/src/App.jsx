import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'

import LandingPage from './component/HomePage/LandingPage'
import Contact from './component/Contact/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <LandingPage />
    </>
  )
}

export default App
