import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';
const Header =() =>{
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Roshika</h1>
        <h5 classname="text-light">Web Developer</h5>
       <CTA/>
       <HeaderSocial/>
       <div className="me">
       <img src={me} alt="me"/>
       </div>
      </div>

    </header>
  );
}

export default Header;