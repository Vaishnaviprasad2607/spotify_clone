import React from 'react';
import Artist from "../images/artist.jpg";
import night from "../images/th.jpg";
import whosays from "../images/selena.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div className='banner'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" id='bannerimg'
          src={Artist}
          alt="First slide"style={{height:'300px'}}
        />
        <Carousel.Caption>
          <h3>Lag ja gale</h3>
          <p>By Sanam </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"id='bannerimg'
          src={night}
          alt="Second slide"style={{height:'300px'}}
        />

        <Carousel.Caption>
          <h3>Night changes</h3>
          <p>By One direction</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"id='bannerimg'
          src={whosays}
          alt="Third slide"style={{height:'300px'}}
        />

        <Carousel.Caption>
          <h3>Who Says</h3>
          <p>
           By Selena Gomez
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export {Banner};