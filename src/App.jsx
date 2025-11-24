import {useState} from 'react'
import Counter from './pages/Counter'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import DigitalClock from './pages/DigitalClock'
import TodoList from './pages/TodoList'
import Calculator from './pages/Calculator'
import './App.css'

const App = () => {

  const [gradient, setGradient] = useState("bg-gradient-to-r from-teal-500 to-cyan-500");

  return (
    <div>

      <Navbar gradient={gradient}/>

      <Routes>
        <Route path="/counter" element={<Counter setGradient={setGradient}/>} />
        <Route path="/digitalclock" element={<DigitalClock setGradient={setGradient}/>} />
        <Route path="/todolist" element={<TodoList setGradient={setGradient}/>} />
        <Route path="/calculator" element={<Calculator setGradient={setGradient}/>} />
      </Routes>
    </div>
  )
}

export default App