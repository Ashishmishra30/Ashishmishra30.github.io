import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md";
import {SlCallEnd} from "react-icons/sl";

export const Contact = () => {
  return (
    <div>
      <section  id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5 id="contact-email">ashishmishra9467@gmail.com</h5>
              <a href="mailto:ashishmishra9467@gmail.com" target="_blank">Send Mail</a>
            </article> <article className='contact__option'>
              <SlCallEnd className='contact__option-icon'/>
              <h4>Mobile No</h4>
              <h5  id="contact-phone">+91-9467922067</h5>
              <a href="tell:+91-9467922067" target="_blank">Call Me</a>
            </article>
          </div>
          <form>
            <input type="text" name="name" placeholder='Your Name' required/>
            <input type="text" name="email" placeholder='Your Email' required/>
            <textarea name="message" placeholder='Your Message'  rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}
