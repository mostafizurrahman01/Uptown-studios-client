import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import BookForm from '../BookForm/BookForm';

const ServiceCard = ({ information, date }) => {
   
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <CardGroup className="ms-5 mt-4 mb-5">
            <Card>
                <Card.Img style={{height:'350px'}} variant="top" src={`data:image/jpeg;base64,${information.image.img}`} />
                <Card.Body>
                    <Card.Title>{information.title}</Card.Title>
                    <Card.Text>
                        This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.
                        <li>{information.timePerDay}</li>
                        <li>{information.price}</li>
                    </Card.Text>
                    <button onClick={openModal} className="btn btn-brand text-uppercase" >Book Appointment</button>
                    <BookForm modalIsOpen={modalIsOpen} appointmentOn={information.subject} closeModal={closeModal} date={date} information={information}></BookForm>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default ServiceCard;