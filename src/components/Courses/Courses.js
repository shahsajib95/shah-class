import React, { useState, useEffect } from 'react';
import './Courses.css'
import { Row, Col } from 'react-bootstrap';
import data from '../fakedata/fakedata';
import CourseDetails from '../CourseDetails/CourseDetails';
import Cart from '../Cart/Cart';

const Courses = () => {

    const [cart, setCart] = useState([]);
    const handleCourse = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart)
    }
    const [course, setCourse] = useState([]);

    useEffect( ()=> {
        fetch(data)
        .then(res=>res.json)
        .then(setCourse(data))
    }, [])


    return (
        <div className="courses">
            <Row>
                <Col xs={12} md={8} className="course-details">
                   {
                       course.map(courses=> <CourseDetails courses={courses} key={courses.id} handleCourse={()=> handleCourse(courses)}></CourseDetails>)
                   }
                </Col>
                <Col xs={{span: 5, offset: 1}}  md={{ span: 3, offset: 1 }} className="total p-3">
                    <Cart cart={cart}></Cart>
                </Col>
            </Row>
        </div>
    );
};

export default Courses;