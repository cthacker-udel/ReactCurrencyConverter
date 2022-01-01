import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export const CurrencyNavbar = () => {

    return(

        <Navbar bg="light">

            <Container>
                <Navbar.Brand>React Currency Converter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {
                            return(
                                <Navigate to="/" />
                            );
                        }}>Home</Nav.Link>
                        <Nav.Link onClick={() => {
                            return(
                                <Navigate to="/convert-currency" />
                            );
                        }}>Convert Currency</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    );

};