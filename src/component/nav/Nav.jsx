import React from 'react';
import './nav.css';
import{RiHomeHeartLine} from 'react-icons/ri'
import { FaRegUserCircle } from "react-icons/fa"
import { LuBookMarked } from "react-icons/lu"
import { SiAmazonsimpleemailservice} from "react-icons/si"
import { AiOutlineContacts } from "react-icons/ai"
import { useState } from 'react'
import {setActiveNav} from 'react'


const Nav =() =>{
  return (
    <nav>
      <a href="#"><RiHomeHeartLine/></a>
      <a href="#about" ><FaRegUserCircle/></a>
      <a href="#experience"><LuBookMarked/></a>
      <a href="#service"><SiAmazonsimpleemailservice/></a>
      <a href="#contact"><AiOutlineContacts/></a>
    </nav>
    
  );
}

export default Nav;