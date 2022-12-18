import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'
import {FaGamepad} from 'react-icons/fa'
import {MdConnectWithoutContact} from 'react-icons/md'
import {BsCode} from 'react-icons/bs'
import {BiDirections} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiBookshelf /></a>
      <a href='#GamePortfolio' onClick={() => setActiveNav('#GamePortfolio')} className={activeNav === '#GamePortfolio' ? 'active' : ''}><FaGamepad /></a>
      <a href='#CodePortfolio' onClick={() => setActiveNav('#CodePortfolio')} className={activeNav === '#CodePortfolio' ? 'active' : ''}><BsCode /></a>
      <a href='#WritingPortfolio' onClick={() => setActiveNav('#WritingPortfolio')} className={activeNav === '#WritingPortfolio' ? 'active' : ''}><BiDirections /></a>
      <a href='#WorkExperience' onClick={() => setActiveNav('#WorkExperience')} className={activeNav === '#WorkExperience' ? 'active' : ''}><MdWork /></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdConnectWithoutContact /></a>
    </nav>
  )
}

export default Nav