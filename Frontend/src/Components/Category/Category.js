import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { IoCarSportOutline } from "react-icons/io5";
import '../../CSS/category.css';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.log('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container id='category'>
        <h6 className="mt-4 mb-3" style={{ color: 'red' ,textAlign:'center'}}> <IoCarSportOutline  style={{ color: 'red',marginTop: '-1px' }}/> CAR CATEGORY</h6>
        <h2 className="mb-4" style={{ textAlign:'center'}}>  Car By Body Types</h2>
      <Row>
        {categories.map((category) => (
          <Col key={category._id} xs={6} sm={6} md={4} lg={2} className="mt-4">
            <Card className="h-100" style={{ border:'none',  maxWidth: '150px' }}>
              <Card.Img className="card-img" variant="top" src={category.img_url} alt={category.title} style={{ height: '100px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className='category-title'>{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
