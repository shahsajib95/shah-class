import React from 'react';
import  './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="header">
            <Navbar  bg="dark" expand="lg">
                <Navbar.Brand href="#home"><b>Shah</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="w-50 ml-5">
                        <FormControl type="text" placeholder="Search" className="form-width"/> <FontAwesomeIcon icon={faSearch} className="search-icon inline ml-2" />
                    </Form>
                    <Nav className="p-2">
                        <Nav.Link href="#home">Web Development</Nav.Link>
                        <Nav.Link href="#link">Graphics Design</Nav.Link>
                        <Nav.Link href="#link">Video Editing</Nav.Link>
                    </Nav>
                    <Button variant="primary">Log In</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;