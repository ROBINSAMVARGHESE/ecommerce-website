import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './Navbar.css'; // Make sure to import your CSS
import { CgLogIn } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

function Navbardesign() {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items); // Assuming your cart items are stored here

  // Calculate the number of items in the cart
  const cartItemCount = cartItems.length;

  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand className='navbar-brand py-3'>Orēal Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto d-flex flex-lg-row justify-content-center mb-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="outline-dark" className="me-2 custom-button" href="/login">
              <CgLogIn className="icon" /> Login
            </Button>
            <Button variant="outline-dark" className="me-2 custom-button" href="/cart">
              <FaShoppingCart className="icon" /> Cart 
              <Badge bg="secondary">{cartItemCount}</Badge> 
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbardesign;

