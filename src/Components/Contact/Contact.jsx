import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {BiMessageDetail} from 'react-icons/bi'
import {SiMessenger} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5kqjadb', 'template_hozq3hc', form.current, 'GGWiXmShC6fV_S1wx')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BiMessageDetail className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Example</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger2</h4>
            <h5>Example2</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts