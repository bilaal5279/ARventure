import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>

</div>
  )
}

export default App
