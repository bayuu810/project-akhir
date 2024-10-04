import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/home'


const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App