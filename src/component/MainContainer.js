import React from 'react';
import "../style/MainContainer.css";
import {Navbar} from "./Navbar";
import {Banner} from "./Banner";

function MainContainer() {
  return (
    <div className='mainMenu'>
   <Navbar/>
    <Banner/>
    </div>
  );
}

export {MainContainer};