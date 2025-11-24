import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
    className='h-15 bg-blue-500 text-white font-semibold text-2xl flex items-center px-15 gap-5 shadow-lg'
    >
        <Link to="/counter">Counter</Link>
        <Link to="/digitalclock">Digital Clock</Link>
        <Link to="/todolist">Todo List</Link>
    </nav>
  )
}

export default Navbar