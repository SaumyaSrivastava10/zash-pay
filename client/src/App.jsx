import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import HomePage from './component/HomePage.jsx/HomePage'
import FeatureList from './component/HomePage.jsx/FeatureList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <HomePage />
        <FeatureList />
    </>
  )
}

export default App
