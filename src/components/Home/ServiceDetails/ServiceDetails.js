import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ information }) => {

    return (
        <CardGroup className="ms-5 mt-4 mb-5">
            <Card>
                <Card.Img style={{ height: '350px' }} variant="top" src={`data:image/jpeg;base64,${information.image.img}`} />
                <Card.Body>
                    <Card.Title>{information.title}</Card.Title>
                    <Card.Text>
                        This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.
                        <li>{information.timePerDay}</li>
                        <li>{information.price}</li>
                    </Card.Text>
                    <Link to="/getBook">
                        <button className="btn btn-primary">Book</button>
                    </Link>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default ServiceDetails;