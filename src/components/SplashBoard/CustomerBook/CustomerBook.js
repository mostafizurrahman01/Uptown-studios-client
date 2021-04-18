import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPaymet';
import Sidebar from '../Sidebar/Sidebar';
import './CustomerBook.css';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const CustomerBook = () => {
    // const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    const history = useHistory();

    const handlePaymentSuccess = (paymentId, name, email, serviceName) => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('serviceName', serviceName)
        formData.append('payment', paymentId)
        formData.append('orderTime',new Date())

        fetch('https://quiet-chamber-19934.herokuapp.com/addBookConfirmation', {
            method: 'POST',
            body: formData
        })

            .then(res => console.log('server side response', res))
            .then(data => {
                    alert('Your Booking Placed successfully');
                    history.go(0);      
                
            })
    }

    return (

        <section>
            <div style={containerStyle} className="div container-fluid row">
                <div className="col-md-3 col-sm-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-10 modify form-modify">
                    <h1>Book</h1>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>

    );
};

export default CustomerBook;