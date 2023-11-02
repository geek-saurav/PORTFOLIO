import React from 'react'
import './About.css'
import ME from '../../assets/ME.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {RiFolderLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>

              <article className="about__card">
                <RiFolderLine className='about__icon'/>
                <h5>Projects</h5>
                <small>35+ Completed</small>
              </article>
            </div>
            <p>
            <br />
            Welcome to my portfolio page! My name is Saurav Kumar, and I am a beginner developer with a passion for learning and creating innovative solutions.As a beginner developer, I am eager to gain practical experience and improve my skills.<br/> I have completed several coding courses and projects to develop my programming skills in Machine Learning and Web Development. I am also familiar with common development tools such as Visual Studio Code, GIT, and Package Managers.In this portfolio, I have showcased some of the projects I have worked on to demonstrate my skills and experience. These projects have given me the opportunity to apply my knowledge and develop my problem-solving abilities. I am excited to continue my journey as a developer and am open to new opportunities and challenges.<br/> Thank you for taking the time to view my portfolio, and please feel free to contact me with any questions or opportunities.
            </p>
            <br />
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About