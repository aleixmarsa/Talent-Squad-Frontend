import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
      <Route  path="/" element={<LoginPage/>} />

    </Routes>
    </div>
  )
}

export default App
