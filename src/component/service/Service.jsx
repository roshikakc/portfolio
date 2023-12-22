import React from 'react';
import './service.css';
import { FaCheck } from "react-icons/fa"
const Service =() =>{
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

          </ul>
        </article>
        {/*END OF Web Development*/}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adhyusf. </p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation*/}


      </div>
    </section>
    
  );
}

export default Service;