import React from 'react'
import "./about.css"
import ME from '../../Assets/Rotate_Picture_2.jpg'
import {MdOutlineWork} from 'react-icons/md'
import {ImBooks} from 'react-icons/im'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Portrait" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years of Work Experience</small>
            </article>
            <article className='about__card'>
              <ImBooks className='about__icon'/>
              <h5>Education</h5>
              <small>3 Undergraduate Degrees</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

          <p>
            I'm a Software Engineer with a slightly different background - My first disciplines were in Psychology and Sociology.
            I received my education in Psychology, Sociology, and Computer Science all at the same place though, which is the 
            University of Utah.
          </p>
          <p>
            I'm also an avid fan of video games. My real passion is in Design - I love talking and thinking about it, not only
            when it comes to video games, but with everything else. In video games, Design encapsulates everything; whether that's
            how the gameplay works, how the art looks, what the music/sounds are like, the presentation....the list goes on. I'm
            a big believer that Design needs to come first - For the person playing it, if the game isn't designed well, all the work done on the art and code 
            is kind of irrelevant.
          </p>
          <p>
            Speaking of code, let's not forget that Design is there too - In Software Development, it's one thing to write some code to
            accomplish something, but it's another thing entirely to organize it in a manner that's flexible and maintainable, and
            that's what I enjoy thinking about.
          </p>
          <p>
            I also have a passion for teaching others, and I have some published guides to a few games on GameFAQs.
          </p>

          <a href='#contact' className='btn btn-primary'>Message Me</a>
        </div>
      </div>
    </section>
  )
}

export default About