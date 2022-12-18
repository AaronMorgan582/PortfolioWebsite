import React from 'react'
import "./portfolio.css"
import SANDSImage from '../../Assets/SandS.png'
import EoZImage from '../../Assets/EoZ.png'
import DarksidersImage from '../../Assets/DarksidersResize.jpg'
import BloodstainedImage from '../../Assets/Bloodstained.jpg'
import OMDImage from '../../Assets/OMD.png'
import HitmanImage from '../../Assets/Hitman.jpg'
import HoardImage from '../../Assets/HoardResize.png'
import WWEImage from '../../Assets/Legends.png'
import {IoMdEye} from 'react-icons/io'
import {MdOutlineThumbUp} from 'react-icons/md'
//Have to go back to video at ~2:18 to change this to iterate through an array.

const Portfolio = () => {
  return (
    <section id='WritingPortfolio'>
      <h5>Published Guides</h5>
      <h2>Writing Portfolio</h2>
      <p className='paragraph'>These are all the guides I've written, which are all published on GameFAQs (a few are also on Neoseeker). Last I read, the approval rating for the average guide on GameFAQs is 60%, so about half of my guides are
        a bit more than that.
      </p>

      <div className="writing__portfolio__container">
        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={SANDSImage} alt="" />
          </div>
          <h3>Salt and Sanctuary</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps4/834700-salt-and-sanctuary/faqs/73366' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />516k+
            <MdOutlineThumbUp className='approval__icon' />83%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={EoZImage} alt="" />
          </div>
          <h3>Resident Evil 7: End of Zoe</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps4/219971-resident-evil-7-biohazard-end-of-zoe/faqs/77508' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />45k+
            <MdOutlineThumbUp className='approval__icon' />79%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={DarksidersImage} alt="" />
          </div>
          <h3>Darksiders 2</h3>
          <div className='writing__portfolio__item-cta'>
            <a href='https://gamefaqs.gamespot.com/ps3/988571-darksiders-ii/faqs/64834' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />127k+
            <MdOutlineThumbUp className='approval__icon' />79%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={BloodstainedImage} alt="" />
          </div>
          <h3>Bloodstained: Curse of the Moon</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps4/238776-bloodstained-curse-of-the-moon/faqs/75962' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />23k+
            <MdOutlineThumbUp className='approval__icon' />79%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={OMDImage} alt="" />
          </div>
          <h3>Orcs Must Die! Unchained</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps4/124927-orcs-must-die-unchained/faqs/75626' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />11k+
            <MdOutlineThumbUp className='approval__icon' />72%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={HitmanImage} alt="" />
          </div>
          <h3>Hitman: Absolution</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps3/943497-hitman-absolution/faqs/66057' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />32k+
            <MdOutlineThumbUp className='approval__icon' />67%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={HoardImage} alt="" />
          </div>
          <h3>Hoard</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps3/605345-hoard/faqs/72560' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />1800+
            <MdOutlineThumbUp className='approval__icon' />63%
          </div>
        </article>

        <article className='writing__portfolio__item'>
          <div className='writing__portfolio__item-image'>
            <img src={WWEImage} alt="" />
          </div>
          <h3>WWE Legends of Wrestlemania</h3>
          <div className="writing__portfolio__item-cta">
            <a href='https://gamefaqs.gamespot.com/ps3/946181-wwe-legends-of-wrestlemania/faqs/72938' 
            className='btn'target='_blank' rel='noreferrer'>GameFAQs</a>
          </div>
          <div className='views__container'>
            <IoMdEye className='eye__icon' />800+
            <MdOutlineThumbUp className='approval__icon' />60%
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio