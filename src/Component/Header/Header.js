import React, { useContext } from 'react';
import './Header.css';
import { Navbar, Nav, Button, Form, Container, InputGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Image/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Header = () => {
    const [loggedIn] = useContext(UserContext);
    
    return (
        <div className="header fixed-top">
            <Container>
            <Navbar expand="lg">
               <Link to="/"> <Navbar.Brand><img className="w-75" src={logo} alt="Travel Guru"/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                <Form.Row>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search your destination.."
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                 </Form>
                    <Nav>
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#link">Destination</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        { loggedIn.email ? 
                            <Nav.Link href="">{loggedIn.name}</Nav.Link>
                            : 
                             <Link to="/login"><Button className="nav-link log-in" variant="warning">Log In</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;