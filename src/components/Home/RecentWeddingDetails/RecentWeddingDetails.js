import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const RecentWeddingDetails = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-6 ms-5 text-center">
            {
                <img style={{ height: '300px' }} src={`data:image/jpeg;base64,${info.image.img}`} />

            }
            <h4 style={{color: 'blue'}}>{info.name}</h4>
            <h4 style={{color: 'darkslategray'}}>{info.venue}</h4>
            <p>{info.description}</p>
        </div>
    );
};

export default RecentWeddingDetails;