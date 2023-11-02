import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/saurav-kumar-956599192/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/geek-saurav" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/_.saurav._k/" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}
export default HeaderSocial