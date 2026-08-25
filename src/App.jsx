import React, { useState, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Loader from './components/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const Counter = React.lazy(() => import("./pages/Counter"));
const TicTacToe = React.lazy(() => import("./pages/TicTacToe"));
const DigitalClock = React.lazy(() => import("./pages/DigitalClock"));
const AnalogClock = React.lazy(() => import("./pages/AnalogClock"));
const TodoList = React.lazy(() => import("./pages/TodoList"));
const Weather = React.lazy(() => import("./pages/Weather"));
const Calculator = React.lazy(() => import("./pages/Calculator"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

const App = () => {

  const [gradient, setGradient] = useState("bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#141e30]");

  return (
    <div>
      <Navbar gradient={gradient} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home setGradient={setGradient} />} />
          <Route path="/tic-tac-toe" element={<TicTacToe setGradient={setGradient} />} />
          <Route path="/counter" element={<Counter setGradient={setGradient} />} />
          <Route path="/digitalclock" element={<DigitalClock setGradient={setGradient} />} />
          <Route path="/analogclock" element={<AnalogClock setGradient={setGradient} />} />
          <Route path="/todolist" element={<TodoList setGradient={setGradient} />} />
          <Route path="/weather" element={<Weather setGradient={setGradient} />} />
          <Route path="/calculator" element={<Calculator setGradient={setGradient} />} />
          <Route path="/quotes" element={<Quotes setGradient={setGradient} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App