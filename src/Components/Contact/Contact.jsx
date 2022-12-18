import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {BiMessageDetail} from 'react-icons/bi'
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
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href='mailto:aaron.st.morgan@gmail.com' target='_blank' rel='noreferrer'>Send an email</a>
          </article>

          <article className='contact__option'>
            <BiMessageDetail className='contact__option-icon' />
            <h4>LinkedIn Message</h4>
            <a href='https://www.linkedin.com/in/aaron-morgan-7045a819a/' target='_blank' rel='noreferrer'>Send a message</a>
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