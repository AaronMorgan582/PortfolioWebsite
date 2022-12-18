import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What I Can Do</h5>
      <h2>My Skills</h2>

      <div className="experience__container">
        <div className="experience__frontend">
          <h3>Programming Skills</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
              </div>
          </article>

          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unity</h4>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unreal</h4>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
              </div>
          </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Critical Thinking</h4>
              </div>
            </article>
              
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Communication</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Leadership</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Organization</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience