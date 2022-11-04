import React from 'react';
import {FaPlus} from "react-icons/fa";
import {BsMusicNoteList,BsTrash} from "react-icons/bs";
import {playlist} from "./playlist";
function MenuPlaylist() {
  return (
    <div className='playlistContainer'>
      <div className='nameContainer' >
        <p >Playlist<i>
            <FaPlus/>
        </i></p>
        
      </div>
      <div className='playlistScroll'>
        {
            playlist && playlist.map((list)=>(
                 <div className='play' key={list.id}>
         <i className='list'>
            <BsMusicNoteList/>
         </i>
         <p >{list.name}</p>
<i className='trash'>
    <BsTrash/>
</i> </div>
            ))
        }
      

      </div>
    </div>
  );
}

export {MenuPlaylist};