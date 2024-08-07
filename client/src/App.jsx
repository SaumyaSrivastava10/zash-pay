import { useState } from 'react'
import './App.css'
import Navbar from './component/Component-parts/Navbar'

import LandingPage from './component/HomePage/LandingPage'
import ContactUs from './component/Contact/ContactUs'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './component/About/AboutUs'
import Register from './component/RegisterPage/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="/identity-verification" component={IdentityVerification} />
        <Route path="/credit-scoring" component={CreditScoring} />
        <Route path="/loan-management" component={LoanManagement} />
        <Route path="/token-management" component={TokenManagement} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
