import React,{useState, Suspense} from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

const Counter = React.lazy(()=>import("./pages/Counter"));
const DigitalClock = React.lazy(()=>import("./pages/DigitalClock"));
const TodoList = React.lazy(()=>import("./pages/TodoList"));
const Calculator = React.lazy(()=>import("./pages/Calculator"));

const App = () => {

  const [gradient, setGradient] = useState("bg-gradient-to-r from-teal-500 to-cyan-500");

  return (
    <div>

      <Navbar gradient={gradient}/>

      <Routes>
        <Route path="/counter" element={
          <Suspense>
            <Counter setGradient={setGradient}/>
          </Suspense>
        } />
        <Route path="/digitalclock" element={
          <Suspense>
            <DigitalClock setGradient={setGradient}/>
          </Suspense>
        } />
        <Route path="/todolist" element={
          <Suspense>
            <TodoList setGradient={setGradient}/>
          </Suspense>
        } />
        <Route path="/calculator" element={
          <Suspense>
            <Calculator setGradient={setGradient}/>
          </Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App