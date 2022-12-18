import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#GamePortfolio'>Games Portfolio</a></li>
        <li><a href='#CodePortfolio'>Programming Portfolio</a></li>
        <li><a href='#WritingPortfolio'>Writing Portfolio</a></li>
        <li><a href='#WorkExperience'>Work Experience</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/aaron-morgan-7045a819a' target="_blank" rel='noreferrer'><BsLinkedin size={20}/></a>
        <a href='https://github.com/AaronMorgan582' target="_blank" rel='noreferrer'><BsGithub size={20}/></a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; Aaron Morgan. All rights reserved.
        </small>
        <div className='credit__link'>
        <a href='https://unsplash.com/photos/OzfD79w8ptA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Background provided by Unsplash.com</a>
        </div>
        <div className='credit__link'>
        <a href='https://www.youtube.com/watch?v=G-Cr00UYokU'>This website created with assistance from EGATOR</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer