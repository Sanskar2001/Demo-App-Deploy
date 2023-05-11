import React from "react";
import {
  PaymentElement,
  useHyper,
  useWidgets,
} from "@juspay-tech/react-hyper-js";

export default function CheckoutForm({ options1, layout }) {
  console.log("options1", options1);
  const stripe = useHyper();
  const elements = useWidgets();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/complete",
      },
    });
  };

  var ui = <PaymentElement id="paymentElement" options={options1} />;
  let paymentElement = (
    <div>
      {" "}
      {layout === "accordion" && ui}
      {layout === "tabs" && ui}
      {layout === "spaced" && ui}
    </div>
  );
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {paymentElement}
    </form>
  );
}
