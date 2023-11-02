import React from 'react'
import './Services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p> Conducting research to understand user needs, behavior, and preferences to inform design decisions.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p> Creating low-fidelity wireframes and high-fidelity prototypes to visualize and test design ideas.</p>
            </li>
            
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Working closely with product managers, developers, and other stakeholders to ensure the design meets business goals and user needs.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Creating a set of design guidelines and standards to maintain consistency and coherence across products.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Defining how users interact with the interface and creating intuitive and efficient interactions.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Conducting user testing to identify usability issues and validate design decisions.</p>
            </li>
            
          </ul>
        </article>
        {/*END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Create unique websites tailored to clients' specific needs and preferences.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Build websites that are optimized for different screen sizes and devices.</p>
            </li>
           
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Create online stores with secure payment processing and shipping integrations.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Develop and customize websites using the popular content management system (CMS).</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Provide ongoing maintenance and support for websites, ensuring they are up to date and running smoothly.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Offer website hosting services, including domain registration and management.</p>
            </li>
            

            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Offer website hosting services, including domain registration and management.</p>
            </li>
            
          </ul>
        </article>
        {/*END OF Web developoment*/}
      </div>
    </section>
  )
}

export default Services