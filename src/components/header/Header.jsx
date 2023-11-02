import React from 'react'
import './Header.css'
import CTA from './cta'
import ME from '../../assets/ME.png'
import HeaderScroll from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <section id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saurav Kumar</h1>
        <h5 className='text-light'>Develpor</h5>
        <CTA />
        <HeaderScroll />
        <div className="me">
          <img src={ME} alt="personal"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header