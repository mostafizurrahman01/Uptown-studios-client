// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const SimpleCardForm = ({handlePayment}) => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const [paymentError, setPaymentError] = useState(null);
//     const [paymentSuccess, setPaymentSuccess] = useState(null);

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         // Get a reference to a mounted CardElement. Elements knows how
//         // to find your CardElement because there can only ever be one of
//         // each type of element.
//         const cardElement = elements.getElement(CardElement);

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.log('[error]', error);
//             setPaymentError(error.message)
//             setPaymentSuccess(null);
//         } else {
//             setPaymentSuccess(paymentMethod.id);
//             setPaymentError(null);
//             handlePayment(paymentMethod.id)
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <CardElement />
//                 <button type="submit" disabled={!stripe}>
//                     Pay
//                 </button>
//             </form>

//             {
//                 paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
//             }

//             {
//                 paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
//             }
//         </div>
//     );
// };


// export default SimpleCardForm;


import React, { useMemo, useState, useContext } from "react";
import { UserContext } from "../../../App";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SimpleCardForm = ({ handlePayment }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [info, setInfo] = useState(null);
  const [check,setCheck]=useState(null);


  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    // console.log("[PaymentMethod]", payload);

    // if (error) {
    //   console.log('[error]', error);
    //   setPaymentError(error.message)
    //   setPaymentSuccess(null);}

    if (payload) {
      const loggedUser = { ...loggedInUser };
      loggedUser[event.target.name] = event.target.value;
      setLoggedInUser(loggedUser);

      setPaymentSuccess(payload.id);
      setPaymentError(null);
      handlePayment(payload.paymentMethod.id, info.name, info.email, info.serviceName,)
      console.log(payload.id)
      console.log('[PaymentMethod]', payload.paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-2">
        <label for="exampleInputPassword1">Name</label>
        <input onBlur={handleBlur} type="text" defaultValue={loggedInUser.name} class="form-control" name="name" placeholder="Name" />
      </div>
      <div className="form-group mt-3">
        <label for="exampleInputEmail1">Email address</label>
        <input onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} class="form-control" name="email" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group mt-3">
        <label for="exampleInputPassword1">Service Name</label>
        <input onBlur={handleBlur} type="text" class="form-control" name="serviceName" placeholder="info Name" />
      </div>
      <div className="mt-3">
        <h6>Pay With</h6>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label class="form-check-label" for="flexRadioDefault1">
          Credit Card
        </label>
        <br/>
        <label className="mt-3 mr-2">
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
      <div class="form-check mt-4">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label class="form-check-label" for="flexRadioDefault2">
          Paypal
        </label>
      </div>

      
    </form>
  );
};

export default SimpleCardForm;

