import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './Navbar.css'; // Make sure to import your CSS
import { CgLogIn } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

function Navbardesign() {
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
                        <Button variant="outline-dark" className="me-2 custom-button" href="/Cart">
                            <FaShoppingCart className="icon" /> Cart <Badge bg="secondary">0</Badge>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbardesign;
