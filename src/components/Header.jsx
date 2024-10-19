import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <div className='p-7 flex gap-12 justify-center'>
        <NavLink className={({isActive})=>`${isActive ? "text-orange-400" : "text-black"}`} to="/">HOME</NavLink>
        <NavLink className={({isActive})=>`${isActive ? "text-orange-400" : "text-black"}`} to="/about">ABOUT</NavLink>
        <NavLink className={({isActive})=>`${isActive ? "text-orange-400" : "text-black"}`} to="/works">WORKS</NavLink>
        <NavLink className={({isActive})=>`${isActive ? "text-orange-400" : "text-black"}`} to="/contact">CONTACT</NavLink>
     </div>
     <div id='logo'>
     
     </div>
    </>
  )
}

export default Header
