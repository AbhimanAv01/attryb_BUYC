import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; 

function ColorSchemesExample() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/dealer'); 
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
            <Nav.Link href="#category" className="mx-3">Car Types</Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">Contact Us</Nav.Link>
          </Nav>
          <button className="btn btn-outline-danger ms-3 danger"  onClick={handleClick}>Dealer</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
