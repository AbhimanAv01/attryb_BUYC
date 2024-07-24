import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/slide1.png';
import img2 from '../../assets/slide2.png';
import img3 from '../../assets/slide3.png';

function DarkVariantExample() {
  const imageStyle = {
    height: '500px',  /
    objectFit: 'cover', 
    width: '100%', 
  };

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={imageStyle} 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={imageStyle}  
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={imageStyle}  
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
