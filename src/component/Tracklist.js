import React from 'react';
import {BsFillVolumeUpFill,BsMusicNoteList} from 'react-icons/bs';
import {FaDesktop} from 'react-icons/fa';
import Track from "../images/track.png"

function Tracklist() {
  return (
    <div className='tracklist'>
        <div className='top'>
            <img src={Track} alt=''></img>
            <p className='trackname'>
                Sample Name <span className='trackspan'> Artist</span>
            </p>
        </div>
        <div className='bottom'>
            <i>
                <BsFillVolumeUpFill/>
            </i>
            <input type="range"></input>
            <i>
                <BsMusicNoteList/>
            </i>
            <i>
                <FaDesktop/>
            </i>
        </div>
    </div>
  )
}

export { Tracklist};