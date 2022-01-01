import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export const CurrencyNavbar = () => {

    return(

        <Navbar bg="light" expand="xxl">

            <Container>
                <Navbar.Brand>React Currency Converter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link onClick={() => {
                    return(
                        <Navigate to="/" />
                    );
                }} />
                <Nav.Link onClick={() => {
                    return(
                        <Navigate to="/convert-currency" />
                    );
                }} />
            </Container>

        </Navbar>

    );

};