import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aaron-morgan-7045a819a' target="_blank" rel='noreferrer'><BsLinkedin size={20}/></a>
        <a href='https://github.com/AaronMorgan582' target="_blank" rel='noreferrer'><BsGithub size={20}/></a>
    </div>
  )
}

export default HeaderSocials