import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'

import LandingPage from './component/HomePage/LandingPage'
import ContactUs from './component/Contact/ContactUs'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Route path="/token-management" component={TokenManagement} />
        <Route path="/registry" component={Registry} />
        <Route path="/about" component={About} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
