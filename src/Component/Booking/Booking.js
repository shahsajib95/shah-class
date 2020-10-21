
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BookedContext } from '../../App';
import Calender from '../Calender/Calender';




const Booking = () => {
    const [booked] = useContext(BookedContext)
    const { name, description} = booked;
    return (
        <div className="banner">
        <div className="overlay"></div>
        <div className="container text-white">
                <Row className="main-content">
                    <Col md={5}>
                        <div>
                        <h1 style={{fontFamily: 'Bebas Neue', fontSize: '10vh'}}>{name}</h1>
                        <p>{description}</p>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 2}}>
                        <Calender name={name}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Booking;