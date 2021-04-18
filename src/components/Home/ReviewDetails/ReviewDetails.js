import React from 'react';
import './ReviewDetails.css';

const ReviewDetails = (props) => {
    const { name, companyName, description } = props.review;

    return (
        <div  className="card-box" >
            <div className="card shadow-sm">
                <div className="card-footer d-flex  align-items-center">
                    {/* <img className="mx-3" src={img} alt="" width="60" /> */}
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{companyName}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewDetails;