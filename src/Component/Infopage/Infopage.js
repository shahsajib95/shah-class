import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BookedContext } from '../../App';
import './Infopage.css'
import star from '../../Icon/star.png'
import { GoogleMap, LoadScript  } from '@react-google-maps/api';


const Infopage = () => {
    const [booked] = useContext(BookedContext)
    console.log(booked)
    const center = {
        lat: 21.427236,
        lng: 92.008735 , 
      };
    const containerStyle = {
        height: '650px',
        border: 'none',
        borderRadius: '20px'
      };
      
    return (
        <div className="book-hotel">
            <Container>
                <hr></hr>
                <Row>
                    <Col sm={6} md={8}>
                        <p>{booked.stay}</p>
                        <h4>Stay in {booked.name}</h4>
                        {booked.info.map(hotel =>
                            <Row className="mt-5">
                                <Col sm={5} md={5}>
                                    <img className="w-100" src={hotel.img} alt="hotel" />
                                </Col>
                                <Col sm={7} md={7}>
                                    <h4>{hotel.appartment}</h4>
                                    <p>{hotel.beds}</p>
                                    <p>{hotel.kitchen}</p>
                                    <p>{hotel.flex}</p>
                                    <div className="d-flex d-flex justify-content-between mt-2">
                                        <p><img className="w-25" src={star} alt="star" /> {hotel.ratings}</p>
                                        <p style={{color: 'black'}}>${hotel.rate}/night</p>
                                        <p>${hotel.total}</p>
                                    </div>
                                </Col>
                            </Row>)}
                    </Col>

                    <Col sm={6} md={4}>
                      
                            <LoadScript 
                                googleMapsApiKey="AIzaSyB41l1yWB6JXEJuRv6Zv7jdcVfcK3vLXLQ">
                            <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                </GoogleMap>
                            </LoadScript>
            
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Infopage;