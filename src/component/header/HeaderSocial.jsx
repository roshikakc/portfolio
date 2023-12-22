import React from 'react';
import './header.css';
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial=() =>{
  return (
    <div className='header__social'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub></FaGithub></a>
    </div>
    
  );
}

export default HeaderSocial
;