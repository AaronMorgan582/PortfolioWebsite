import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../Assets/P_20200529_133111_BF.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Aaron Morgan</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header