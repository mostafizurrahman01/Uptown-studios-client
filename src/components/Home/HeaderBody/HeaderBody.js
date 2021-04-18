import React from 'react';
import { Link } from 'react-router-dom';
import photographer from '../../../images/photographer.jpg';
import './HeaderBody.css';

const HeaderBody = () => {
    return (
        <section className="row d-flex align-items-center headerBody-container container-fluid">
            <div style={{ height: '200px' }} className="col-md-4 col-sm-12  mx-auto offset-md-1">
                <small className="title">Hello There!</small>
                <h3 style={{ color: '#3A4256' }}>Welcome, UPTOWN STUDIOS</h3>
                <p className="text-secondary">A wedding, pre-wedding and fashion photographer based in central Europe.
                 <br /> Mauris porttitor magna vel ante luctus convallis. Nunc at tellus erat. Donec et magni lectus. Aliquam egestas vel arcu id maximus. Orci varius natoque penatibus et mate dis parturient montes, nascetur ridiculus miss.
                <br /> Quisque efficitur nisi nec tellus fringilla posuere. Sed ut scelerisque tortor. Mauris maximus sollicitudin purus, sed fringilla lorem auctor eget. Interdum et malesuada duruthemes the miss a comp dresire ifames.
                </p>
                <Link to="/getBook">
                    <button className="btn btn-primary">Book</button>
                </Link>

            </div>

            <div style={{ height: '200px' }} className="col-md-6 col-sm-12 mx-auto img-container ">
                <img src={photographer} alt="" className="img-fluid" />
            </div>

        </section>
    );
};

export default HeaderBody;