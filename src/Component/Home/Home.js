import React from 'react';
import { Col, Row } from 'react-bootstrap';
import  Carousel  from 'react-elastic-carousel';
import './Home.css'
import sliderOne from '../../Image/Sajek.png';
import sliderTwo from '../../Image/Sreemongol.png';
import sliderThree from '../../Image/sundorbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Placedetails from '../Placedetails/Placedetails';

const Home = (props) => {
  const handleBook = props.handleBook;
    return (
        <div className="banner">
            <div className="overlay"></div>
            <div className="container text-white">
                <Row className="main-content">
                    <Col md={5}>
                        <Placedetails handleBook={handleBook} ></Placedetails>
                    </Col>
                    <Col md={7}>
                        <Carousel enableAutoPlay autoPlaySpeed={2500}>
                            <div className="slider">   
                            <p id="slideOne">COX'S BAZAR</p>
                            <img className=" ml-5 active" src={sliderOne} alt="slider" />
                            </div>
                            <div className="slider">
                            <p id="slideTwo">SREMANGAL</p>
                            <img className=" ml-5" src={sliderTwo} alt="slider" />
                            </div>
                            <div className="slider">
                            <p id="slideThree">SUNDARBANS</p>
                            <img className=" ml-5" src={sliderThree} alt="slider" />
                            </div>
                        </Carousel>
                        <FontAwesomeIcon className="slider-btn mt-5 ml-2" icon={faChevronCircleLeft} />
                        <FontAwesomeIcon className="slider-btn mt-5 ml-2" icon={faChevronCircleRight} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;