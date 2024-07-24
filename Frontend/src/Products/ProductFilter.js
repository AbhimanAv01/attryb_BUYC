// src/components/Filters.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../CSS/Productfilter.css'

const Filters = ({ onFilterChange }) => {
  const [price, setPrice] = useState('');
  const [colors, setColors] = useState('');
  const [mileage, setMileage] = useState('');

  const handleApplyFilters = () => {
    const filterObject = {};
    if (price) filterObject.list_price = price;
    if (colors) filterObject.available_color = colors.split(',').map(color => color.trim());
    if (mileage) filterObject.milleage = Number(mileage);

    // Pass filter object to parent component
    onFilterChange(filterObject);
  };

  return (
    <Container className="flitercon">
    <h2 className="mb-5">Let's Find Your Perfect Car</h2>
    <Row>
      <Col md={4}>
        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control 
            as="select" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Select Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
            <option value="new-arrivals">New Arrivals</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="colors">
          <Form.Label>Colors:</Form.Label>
          <Form.Control 
            as="select" 
            value={colors} 
            onChange={(e) => setColors(e.target.value)}
          >
            <option value="">Select Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="mileage">
          <Form.Label>Mileage:</Form.Label>
          <Form.Control 
            as="select" 
            value={mileage} 
            onChange={(e) => setMileage(e.target.value)}
          >
            <option value="">Select Mileage</option>
            <option value="5">5+</option>
            <option value="10">10+</option>
            <option value="15">15+</option>
            <option value="20">20+</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
    <div className="text-center mt-3">
        <Button variant="danger" onClick={handleApplyFilters}>
          Search
        </Button>
      </div>  </Container>
  );
};

export default Filters;
