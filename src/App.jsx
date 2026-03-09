import React,{useState, Suspense} from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Loader from './components/Loader';

const Counter = React.lazy(()=>import("./pages/Counter"));
const DigitalClock = React.lazy(()=>import("./pages/DigitalClock"));
const TodoList = React.lazy(()=>import("./pages/TodoList"));
const Weather = React.lazy(()=>import("./pages/Weather"));

const App = () => {

  const [gradient, setGradient] = useState("bg-gradient-to-r from-teal-500 to-cyan-500");

  return (
    <div>
      <Navbar gradient={gradient} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/counter" element={<Counter setGradient={setGradient} />} />
          <Route path="/digitalclock" element={<DigitalClock setGradient={setGradient} />} />
          <Route path="/todolist" element={<TodoList setGradient={setGradient} />} />
          <Route path="/weather" element={<Weather setGradient={setGradient} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App