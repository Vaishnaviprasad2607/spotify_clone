import React from 'react';
import "../style/LeftMenu.css";

import {FaSpotify, FaEllipsisH} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import {Menu} from "./Menu";
import { MenuList } from './Menulist';
import {MenuPlaylist} from './MenuPlaylist';
import {Tracklist} from './Tracklist';
function LeftMenu() {
  return (

    
      
    <div className='leftMenu' >
    <div className='logocontainer'>
    
      <i> <FaSpotify /></i>
      <h2>Spotify</h2>
      <i><FaEllipsisH /></i>
    </div>
    <div className='searchbox'>
        <input type="text" placeholder='Search...' />
        <i className='sicon'>
          <BiSearchAlt/>
          </i>
      </div>
      <Menu title={'Menu'} menuobj={MenuList} />
      <MenuPlaylist/>
      <Tracklist/>

   </div>
   
  );
}

export { LeftMenu };


