import React, { useEffect } from 'react';
import "../style/MainContainer.css"
import { FaUsers } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import {Banner} from "./Banner";
import Track from "../simg/night.jpg";
import subah from "../simg/subah.jpg";
import kantara from "../simg/kantara.webp";
import sanam from "../simg/sanam.jpg";
import selena from "../simg/selena.jpg";



function MainContainer() {
  useEffect(()=> {
    const allLi =document
    .querySelector('.menuList')
    .querySelectorAll("li");
function changeMenuActive(){
  allLi.forEach((n)=>n.classList.remove("active") );
  this.classList.add("active");
}
  allLi.forEach(n=> n.addEventListener('click',changeMenuActive))

  },[])
  return (
    <div className='mainMenu' >
    <Banner/>
   <div className='menuList' >
    <ul >
      <li ><a href='#'>Popular</a></li>
      <li ><a href='#'>Albums</a></li>
      <li><a href='#'>Songs</a></li>
      <li ><a href='#'>Fans</a></li>
      <li > <a href='#'>About</a></li>
     
    </ul>
    <p ><i><FaUsers/></i> 12.3M <span>Followers</span></p>
   </div>
   <div className='addsong'>
      <div className='songList'>
      <img src={Track} alt=''></img>
      <span>Night Changes</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      <div className='songList'>
      <img src={subah} alt=''style={{width:'40px',height:'40px'}}></img>
      <span>Subahnallah</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      <div className='songList'>
      <img src={kantara} alt=''></img>
      <span>Kantara</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      <div className='songList'>
      <img src={sanam} alt=''></img>
      <span>Sanam</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      <div className='songList'>
      <img src={selena} alt=''></img>
      <span>Who says</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      <div className='songList'>
      <img src={kantara} alt=''></img>
      <span>Singara Siriya</span>
      <span className='songplay'><span className='timestamp'>05:34 <i><FaPlayCircle/></i></span></span>
      </div>
      </div>
    </div>
  );
}

export {MainContainer};