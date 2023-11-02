import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAURAV KUMAR</a>
      <ul className='links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_.saurav._k" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://www.linkedin.com/in/saurav-kumar-956599192/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/geek-saurav" target="_blank"><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Saurav Kumar. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer