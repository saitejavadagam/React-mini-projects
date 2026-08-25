import React from 'react'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react';

const Navbar = ({ gradient }) => {
  return (
    <nav
      className={`${gradient} navbar relative md:h-15 text-white font-semibold text-2xl md:flex items-center flex-col py-5 md:flex-row px-15 gap-10 shadow-md shadow-black/30 text-shadow-md z-10
          hidden
        `}
    >
      <Link to="/"><House size={24} /></Link>
      <Link to="/counter">Counter</Link>
      <Link to="/digitalclock">Digital Clock</Link>
      <Link to="/analogclock">Analog Clock</Link>
      <Link to="/todolist">Todo List</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/weather">Weather</Link>
    </nav>
  )
}

export default Navbar