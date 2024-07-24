import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const CarFilters = ({ onFilterChange }) => {
  const [modelName, setModelName] = useState('');
  const [year, setYear] = useState('');

  const handleApplyFilters = () => {
    // Create filter object with only non-empty values
    const filterObject = {};
    
    if (modelName) filterObject.model_name = modelName.trim();
    if (year) filterObject.year_of_model = Number(year);

    // Pass filter object to parent component
    onFilterChange(filterObject);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Welcome! Dealer</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Model Name</Form.Label>
          <Form.Control
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="Car Model Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Car Year"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleApplyFilters}
          className="w-100"
        >
          Apply Filters
        </Button>
      </Form>
    </Container>
  );
};

export default CarFilters;
