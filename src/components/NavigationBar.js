import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "../styles/Nav.css";
import LoginModal from './LoginModal'; 
    
const NavigationBar = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);
  return (
    <>
    
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src="/assets/img/1.png" alt="Logo" />
      </Navbar.Brand>
      <Form className="mx-auto navbar-search-form">
      
        <FormControl
          type="text"
          placeholder="Search Timeshare"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav>
      <Nav.Link onClick={handleShowLogin}>Login/Register</Nav.Link>
      </Nav>
    </Navbar>
    <LoginModal show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default NavigationBar;
