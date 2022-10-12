import React from 'react'
import "./about.css"
import ME from '../../Assets/P_20200529_133111_BF.jpg'
import {MdOutlineWork} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years of Work Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias architecto rerum voluptatum, temporibus, 
            ipsam tenetur consectetur, quos earum molestias repellat. Tempora eos illum quod iusto repellat doloremque 
            ullam nam!
          </p>

          <a href='#contact' className='btn btn-primary'>Message Me</a>
        </div>
      </div>
    </section>
  )
}

export default About