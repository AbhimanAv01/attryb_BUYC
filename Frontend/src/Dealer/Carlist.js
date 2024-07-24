// src/components/ProductItem.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported.
import '../CSS/carlist.css'

const ProductItem = ({ product, onSelect, onEdit }) => {
  return (
    <Card className="car-card">
     <Card.Img variant="top" src={product.img_url} alt={product.model_name} className="fixed-image-1" />
      <Card.Body>
        <Card.Title>{product.model_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price: ${product.list_price}</Card.Subtitle>
        <Card.Text>
          <p>Year of Model: {product.year_of_model}</p>
          <p>Mileage: {product.mileage} miles</p>
          <p>Available Colors: {product.available_colors.join(', ')}</p>
          <p>Power (bhp): {product.power_bhp}</p>
          <p>Max Speed: {product.max_speed} km/h</p>
        </Card.Text>
        <Button variant="primary" onClick={onSelect}>Select Car</Button>
        </Card.Body>
    </Card>
  );
};

export default ProductItem;
