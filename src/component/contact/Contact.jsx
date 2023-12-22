import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaWhatsapp  } from 'react-icons/fa'


const Contact =() =>{
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
         <div className="contact__options">
         <article className='contact__option'>
            < MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>roshikakc@gmail.com</h5>
            <a href="https://www.google.com/gmail" target='blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>roshikakc</h5>
            <a href="https://www.facebook.com/" target='blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>9844300000</h5>
            <a href="https://www.whatsapp.com" target='black'>Send a message</a>
          </article>
          
         </div>
         {/*end of contact options*/}
         <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='name' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='button button-primary'>Send Message</button>
         </form>
      </div>
    </section>
    
  );
}

export default Contact;