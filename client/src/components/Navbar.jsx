import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>CHUMZ</Link>
        <div>
          <menu>
            <NavLink to="/elections">Elections</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </menu>
          <button className="theme__toggle-btn"><IoIosMoon /></button>
          <button className="nav__toggle-btn"><HiOutlineBars3 /></button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar