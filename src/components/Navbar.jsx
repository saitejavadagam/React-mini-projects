import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({gradient}) => {
  return (
    <nav
    className={`${gradient} h-15 text-white font-semibold text-2xl flex items-center px-15 gap-5 shadow-md shadow-black/40 text-shadow-md`}
    >
        <Link to="/counter">Counter</Link>
        <Link to="/digitalclock">Digital Clock</Link>
        <Link to="/todolist">Todo List</Link>
    </nav>
  )
}

export default Navbar