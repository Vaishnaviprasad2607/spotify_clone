import React from 'react';
import Artist from "../images/artist.jpg"
function Banner() {
  return (
    <div className='banner'>
       <img src={Artist} alt=''className='bannerimg'></img>
    </div>
  );
}

export {Banner};