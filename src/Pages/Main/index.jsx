// Carousel.js

import React, { useState } from 'react';
import './style.css';
import { images } from '../../img/index'; // import images array
import Right from "../Right"

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (i) => {
    setActiveIndex(i);
  }

  return (
    <>
    <div className='main_sec'>
    
    <div className="carousel">
    <h1 className='heading'>Graaza</h1>
      <div className="carousel-images">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            className={i === activeIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <img
            key={i}
            src={images[i]}
            alt=""
            className={i === activeIndex ? 'dot active-dot' : 'dot'}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
    <div className='right'>
        <Right/>
    </div>
    </div>
    
    </>
  
  );
}

export default Main;
