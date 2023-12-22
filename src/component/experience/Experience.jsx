import React from 'react';
import './experience.css';
import { FaClipboardCheck } from 'react-icons/fa'

const Experience =() =>{
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            </div>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            </div>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            </div>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            </div>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
       {/* End OF FRONTEND*/}


      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            </div>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            </div>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience_details'>
            <FaClipboardCheck className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
            </div>
            <small className='text-light'>Intermediate</small>
          </article>
      </div>
      
    </div>
    </div>
    </section>
    
  );
}

export default Experience;