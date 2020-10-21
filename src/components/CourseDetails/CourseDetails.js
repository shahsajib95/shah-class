import React, { useState } from 'react';
import './CourseDetails.css'
import { Media, Button } from 'react-bootstrap';

const CourseDetails = (props) => {
    const { img, title, name, duration, price, level } = props.courses;
    const [isSuccess, setIsSuccess] = useState(false);
    const finalCourseHandler = (currentCourse) => {
            props.handleCourse(currentCourse);
            setIsSuccess(true);
    }

    return (
        <div className="p-5 all-courses">
            <Media>
                <img
                    className="align-self-start mr-3 w-25"
                    src={img}
                    alt="Course Img"
                />
                <Media.Body className="ml-3">
                    <h5>{title} with {name}</h5>
                    <p>Duration: <b>{duration}</b></p>
                    <button id="level">{level}</button>
                    <h2>${price}</h2>
       
                {isSuccess ?
                    <Button variant="light" size="sm" onClick={finalCourseHandler} className="disabled">
                    Enrolled
                </Button>
                :
                <Button variant="dark" size="sm" onClick={finalCourseHandler}>
                    Enroll Now
                </Button>}
                </Media.Body>
            </Media>
        </div>
    );
};

export default CourseDetails;