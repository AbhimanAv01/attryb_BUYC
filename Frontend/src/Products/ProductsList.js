// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import Filters from './ProductFilter';
import Navbar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import Adv1 from '../Components/Adv/Adv';
import { MdOutlineLocalGasStation } from "react-icons/md"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import '../CSS/ProductList.css'
import CategoryList from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [error, setError] = useState('');

  // Fetch all products initially
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('https://attryb-buyc-backend.onrender.com/api/inventory/find'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchAllProducts();
  }, []);

  // Fetch filtered products based on selected filters
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        // Construct the query string based on filters
        const queryString = new URLSearchParams(filters).toString();
        console.log(queryString)
        const response = await fetch(`https://attryb-buyc-backend.onrender.com/api/inventory/find?${queryString}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.length === 0) {
            setError('Car not found');
          } else {
            setFilteredProducts(data);
            setError('');
          }
      } catch (error) {
        setError('Car not found');
        console.error('Error fetching filtered products:', error);
      }
    };

    if (Object.keys(filters).length > 0) {
      fetchFilteredProducts();
    } else {
      setFilteredProducts(products); // Show all products if no filters are applied
    }
  }, [filters, products]);

  return (
    <Container fluid className="px-0">
      <Navbar />
      <Carousel />
      <Filters onFilterChange={setFilters} />

      <Container className="px-5 my-4">
        <h6 className="mb-4" style={{ color: 'red' ,textAlign:'center'}}> <IoCarSportOutline  style={{ color: 'red',marginTop: '-1px' }}/> New Arrivals</h6>
        <h2 className="mb-4" style={{ textAlign:'center'}}>  Let's Check Latest Cars</h2>
        {error ? (
          <p>{error}</p>
        ) : filteredProducts.length > 0 ? (
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-5">
                <Card className="h-100">
                  <Card.Img variant="top" src={product.img_url} alt={product.model_name} className="fixed-image" />
                  <Card.Body>
                    <Card.Title>{product.model_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.year_of_model}</Card.Subtitle>
                    <Card.Text>
                    <LiaRupeeSignSolid style={{ color: 'red',marginTop: '-5px' }}/> Price: ₹{product.list_price.toLocaleString()}<br />
                      <MdOutlineLocalGasStation style={{ color: 'red',marginTop: '-5px' }} /> Mileage: {product.milleage} km/l
                    </Card.Text>
                    <Button variant="danger">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
      <Adv1 />
      <CategoryList />
      <Footer />
    </Container>
  );
}

export default ProductList;
