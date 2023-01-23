import React from 'react'
import './about.css'
import ME from '../../assets/vic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers,} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

<div className="container about__container">
  <div className="about__me">
  <div className="about__me-image">
    <img src={ME} alt="About Image"/>
   </div>
  </div>

  <div className="about__content">
     <div className="about__cards">
      <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>3 Months of Training</small>
      </article>

      <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>N/A</small>
      </article>

      <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5>Projects</h5>
        <small>2 Completed Projects</small>
      </article>
     </div>
<p>am a passionate and hard-working person. I like to write code, solving difficult problems. I am able to work in a team. I believe that my high education level in bachelor of science information techinology will help me to achieve my goals.</p>

    <a href="#contact" className="btn btn-primary">Let's Talk</a>
   </div>
  </div>
 </section>
  )
}

export default About