import React, { useState } from 'react';
import './Calender.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Calender = (props) => {
    const date = () => {
        new Date()
    }
    const [bookPlace, setBookPlace] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const { cityfrom, cityto = props.name } = setBookPlace;

    const handleSubmit = (e) => {
        const visitDate = JSON.stringify(fromDate)
        const stayDate = JSON.stringify(toDate)
        const allItem = { ...bookPlace, cityto, visitDate, stayDate }
        setBookPlace(allItem)
        e.preventDefault()
    }
    const handleChange = (e) => {
        setBookPlace({ ...bookPlace, [e.target.name]: e.target.value });
    }
    return (
        <div className="book-now p-5">

            <Form onSubmit={handleSubmit}>
                <Form.Label className="mt-3">Origin</Form.Label>
                <Form.Control placeholder="City" name="cityfrom" onChange={handleChange} value={cityfrom} required />
                <Form.Label className="mt-3"> Destination</Form.Label>
                <Form.Control placeholder={props.name} name="cityto" onChange={handleChange} required value={cityto}/>
                <Form.Row className="mt-3">
                    <Form.Group as={Col}>
                    <Form.Label>From</Form.Label>
                        <DayPickerInput className="form-control" name="datefrom" 
                        disabledDays={date}
                        value={fromDate} onDayChange={day => setFromDate(day)} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label className="">To</Form.Label>
                        <DayPickerInput className="form-control" name="dateto" value={toDate} onDayChange={day => setToDate(day)} required />
                    </Form.Group>
                </Form.Row>
                {bookPlace ? <Link to="/book-hotel">
                    <Button className="log-in mt-3 w-100" variant="warning" type="submit">Start Booking</Button>
                </Link>
                    :
                    <Button className="log-in mt-3 w-100" variant="warning" type="submit">Start Booking</Button>}
            </Form>
        </div>
    );
};

export default Calender;