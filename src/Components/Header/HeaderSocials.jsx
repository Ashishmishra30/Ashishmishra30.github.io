import React from 'react';
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a id="contact-linkedin" href="https://www.linkedin.com/in/ashish-mishra-706165137/" target="_blank"><BsLinkedin/></a>
        <a  id="contact-github" href="https://github.com/Ashishmishra30" target="_blank"><BsGithub/></a>
        <a id="contact-email" href="https://mail.google.com/" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials