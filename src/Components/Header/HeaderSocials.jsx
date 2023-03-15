import React from 'react';
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ashish-mishra-706165137/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ashishmishra30" target="_blank"><BsGithub/></a>
        <a href="https://mail.google.com/" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials