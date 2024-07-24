import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "../../CSS/Footer.css";




const Footer = () => {
  const latitude = 12.9715987;  
  const longitude = 77.5945627; 

  // Create a custom red marker icon
  const redMarkerIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
   
  });

  return (
    <footer className="footer-con">
      <Container className="footer-con-2">
        <Row>
          <Col xs={12} md={4}>
            <h5>BUYC CORP</h5>
            <p>
              Get your dream car today! Low mileage, pristine condition, and a great price. Drive home your perfect ride now!
            </p>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" className="text-light">
                  <FaFacebookF />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" className="text-light">
                  <FaTwitter />
                </a>
              </li>
              <li className="me-3">
                <a href="https://instagram.com" className="text-light">
                  <FaInstagram />
                </a>
              </li>
              <li className="me-3">
                <a href="https://linkedin.com" className="text-light">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>1234 Street Name</li>
              <li>City, State, 56789</li>
              <li>Email: buycorp@gmail.org</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </Col>
          // <Col xs={12} md={5}>
          //   <h5>Find Us</h5>
          //   <MapContainer
          //     center={[latitude, longitude]} // Set the map center to your desired coordinates
          //     zoom={12}
          //     style={{ height: '200px', width: '100%' }}
          //   >
          //     <TileLayer
          //       url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          //     />
          //     <Marker position={[latitude, longitude]} icon={redMarkerIcon}>
          //       <Popup>
          //         BUYC Corp <br /> 1234 Street Name, City, State, 56789.
          //       </Popup>
          //     </Marker>
          //   </MapContainer>
          // </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="bottom-footer">
            <p>&copy; {new Date().getFullYear()} BUYC CORP. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
