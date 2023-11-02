import React from 'react'
import './Portfolio.css'
import IMG1 from "../../assets/port1.png"
import IMG2 from "../../assets/port2.png"
import IMG3 from "../../assets/port3.png"
import IMG4 from "../../assets/port4.png"
import IMG5 from "../../assets/port5.png"
import IMG6 from "../../assets/port6.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>My Personal Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/personal_website.git" className='btn' target='_blank'>Github</a>
            <a href="https://geek-saurav.github.io/personal_website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>News App Using Python</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/NewsApp.git" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/geek-saurav/NewsApp.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>DBMS Project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/DBMS-PROJECT.git" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/geek-saurav/DBMS-PROJECT.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
          </div>
          <h3>Valtor Bot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/VALTOR_BOT.git" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/geek-saurav/VALTOR_BOT.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
          </div>
          <h3>Beanstalk API App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/Beanstalk-API.git" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/geek-saurav/Beanstalk-API.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>Web Browser using Pyhton</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/geek-saurav/Web_Browser.git" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/geek-saurav/Web_Browser.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio