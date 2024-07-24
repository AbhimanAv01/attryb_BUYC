// src/components/Adv1.js
import React from 'react';
import { Image } from 'react-bootstrap';
import adv1 from '../../assets/poster1.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Adv1() {
  return (
    <div className="add-container">
      <Image
        className="add-img"
        src={adv1}
        alt="Advertisement"
        fluid // Makes the image responsive
      />
    </div>
  );
}

export default Adv1;
