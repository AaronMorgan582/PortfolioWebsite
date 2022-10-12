import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {MdConnectWithoutContact} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookshelf /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdConnectWithoutContact /></a>
    </nav>
  )
}

export default Nav