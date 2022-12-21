import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const productInfo = useLoaderData();

  return (
    <div>
      MAKE PAYMENT
      <div className="w-80  my-16">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={productInfo?.data?.price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
