import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51IeK7VIOlxYtqUBDlDXwqhMEpZzfpZwsvp204MwZpMpkag4L3tQLCDzxHKcYhpyz4gFUhL0PwGlPV52bGCuOtw9W00MrjUqdzw');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
           {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;