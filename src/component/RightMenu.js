import React from 'react';
import {FaBell, FaCrown, FaRegHeart,FaSun,FaCogs} from "react-icons/fa";
import "../style/RightMenu.css";
import Profile from "../images/spotify.jpeg"
function RightMenu() {
  return (
    <div className='rightMenu'>
      <div className='gopro'>
        <i><FaCrown/><p>Go <span>Pro</span></p></i>
        <i><FaBell/></i>
        <i><FaRegHeart/></i>
      </div>
        <div className='profile'>
       <i><FaSun/></i>
       <i><FaCogs/></i>
      </div>
     
    </div>
  )
}

export {RightMenu};