import React from 'react'
import Counter from './pages/Counter'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import DigitalClock from './pages/DigitalClock'
import TodoList from './pages/TodoList'

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/counter" element={<Counter/>} />
        <Route path="/digitalclock" element={<DigitalClock/>} />
        <Route path="/todolist" element={<TodoList/>} />
      </Routes>
    </div>
  )
}

export default App