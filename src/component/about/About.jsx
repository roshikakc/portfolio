import React from 'react';
import './about.css';
import me from '../../assets/me-about.jpg'
import { LiaAwardSolid } from 'react-icons/lia'
import { AiOutlineUserSwitch } from "react-icons/ai"
import { BsFolderSymlink } from 'react-icons/bs'
const About =() =>{
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={me} alt="me" />
        </div>
      </div>
      <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
          <LiaAwardSolid className='about__icon'/>
            <h5>Experience</h5>
            <small>3+years working </small>
          </article>

          <article className='about__card'>
          <AiOutlineUserSwitch className='about__icon'/>
            <h5>Clients</h5>
            <small>300+ Clients Worldwide </small>
          </article>

          <article className='about__card'>
          <BsFolderSymlink className='about__icon'/>
            <h5>Projects</h5>
            <small>50+ Completed Projects </small>
          </article>
         </div>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime quis suscipit similique sapiente voluptates nulla ad perferendis ipsa quas eum itaque ut, earum tempore dolor aperiam. 
          Consequatur, repellendus beatae. Lorem ipsum dolor sit.
         </p>

         <a href="#contact" className='button button-primary'>Let's Talk</a>
      </div>
     </div>
    </section>
    
  );
}

export default About;