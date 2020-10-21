import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import  Carousel  from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { BookContext } from '../../App';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Placedetails = (props) => {
    const [book] = useContext(BookContext)
    
    return (
        <div> 
            <Carousel enableAutoPlay autoPlaySpeed={2500}>
                {book.map(place=>
                <div key={place.id}>
                <h1 style={{fontFamily: 'Bebas Neue', fontSize: '5rem'}}>{place.name}</h1>
                <p>{place.description}</p>
                <Link to="/booking"><Button onClick={()=> props.handleBook(place)} variant="warning">Booking <FontAwesomeIcon icon={faLongArrowAltRight}/></Button></Link>
                </div>)}
            </Carousel>
        </div>
    );
};

export default Placedetails;