import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import {items} from '../Assets/Items/items.js'
import {items} from '../Assets/Items/items.js'
import { Link } from 'react-router-dom';
import './Carousel.css'

const CarouselSlider = () => {
  return (
    <div className='carousel-section'>
      <div className="ourproducts-box">
        <h2 className='ourproducts-text' >Our Products</h2>
      </div>
      <Carousel className='carousel'>
          {
              items.map((val) => 
                <Carousel.Item interval={3500} className='carousel-item'>
                <Link to={`/item/${val.title}`} target="_blank" >
                  <img
              className="d-block w-100" height='450px'
              src={val.image}
              alt={val.title}
              />
            </Link>
            <Carousel.Caption className='carousel-caption'>
              <h3 style={{}}>{val.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
              )
          }
      </Carousel>
    </div>
  );
}

export default CarouselSlider;