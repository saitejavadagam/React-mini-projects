import {useState} from 'react'
import Counter from './pages/Counter'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import DigitalClock from './pages/DigitalClock'
import TodoList from './pages/TodoList'

const App = () => {

  const [gradient, setGradient] = useState("bg-gray-100");

  return (
    <div className='transition ease-in-out duration-1000'>

      <Navbar gradient={gradient}/>

      <Routes>
        <Route path="/counter" element={<Counter setGradient={setGradient}/>} />
        <Route path="/digitalclock" element={<DigitalClock setGradient={setGradient}/>} />
        <Route path="/todolist" element={<TodoList setGradient={setGradient}/>} />
      </Routes>
    </div>
  )
}

export default App