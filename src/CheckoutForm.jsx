import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useHyper,
  useWidgets,
} from "@juspay-tech/react-hyper-js";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

//import { PaymentRequestButtonElement } from "@stripe/react-stripe-js";

export default function CheckoutForm({
  locale,
  selectedMenu,
  options1,
  layout,
  setLayout,
}) {
  console.log("options1", options1);
  const stripe = useHyper();
  const elements = useWidgets();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "order_id"
    );

    // if (stripe) {
    //   const pr = stripe.paymentRequest({
    //     country: 'US',
    //     currency: 'usd',
    //     total: {
    //       label: 'Demo total',
    //       amount: 1099,
    //     },
    //     requestPayerName: true,
    //     requestPayerEmail: true,
    //   });
    //   console.log(">>>", pr)
    //   // Check the availability of the Payment Request API.
    //   pr.canMakePayment().then(result => {
    //     if (result) {
    //       setPaymentRequest(pr);
    //     }
    //   });
    // }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log("inisde effect", paymentIntent);
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    console.log("ELEMENTS", elements);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/complete",
      },
    });
    console.log("ERORR", error);

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };
  // const options = {
  //   // style: {
  //   //   base: {
  //   //     iconColor: '#c4f0ff',
  //   //     color: 'green',
  //   //     fontWeight: '800',
  //   //     fontFamily: 'Combo',
  //   //     fontSize: '16px',
  //   //     fontSmoothing: 'antialiased',
  //   //     ':-webkit-autofill': {
  //   //       color: '#fce883',
  //   //     },
  //   //     '::placeholder': {
  //   //       color: '#87BBFD',
  //   //     },
  //   //     ':hover': {
  //   //       backgroundColor: 'lightblue',
  //   //     },
  //   //   },
  //   //   invalid: {
  //   //     backgroundColor: 'red',
  //   //     iconColor: '#FFC7EE',
  //   //     color: '#FFC7EE',
  //   //     fontSize: '30px',
  //   //   },
  //   //   complete: {
  //   //     backgroundColor: 'gray',
  //   //     iconColor: '#FFC7EE',
  //   //     color: 'brown',
  //   //   },
  //   //   empty: {
  //   //     backgroundColor: 'green',
  //   //     iconColor: '#FFC7EE',
  //   //     color: '#FFC7EE',
  //   //   },
  //   // },
  // };

  // const x =
  //   locale.locale === "ja"
  //     ? `今払う`
  //     : locale.locale === "ar"
  //     ? `ادفع الآن`
  //     : "Pay Now";
  // if (paymentRequest) {
  //   return <PaymentRequestButtonElement options={{ paymentRequest }} />
  // }

  var ui = <PaymentElement id="paymentElement" options={options1} />;
  let paymentElement = (
    <>
      {" "}
      {layout === "accordion" && ui}
      {layout === "tabs" && ui}
      {layout === "spaced" && ui}
    </>
  );
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {selectedMenu && (
        <div className="layout">
          <div className="menuHeader">Layout</div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={layout}
              onChange={(event) => {
                setLayout(event.target.value);
              }}
              sx={{
                color: "#aaa7a7",
              }}
            >
              <FormControlLabel value="tabs" control={<Radio />} label="Tabs" />
              <FormControlLabel
                value="accordion"
                control={<Radio />}
                label="Accordion"
              />
              <FormControlLabel
                value="spaced"
                control={<Radio />}
                label="Spaced Accordion"
              />
            </RadioGroup>
          </FormControl>
        </div>
      )}
      {/* <PaymentRequestButtonElement id="paymentButton" /> */}

      {/* <PaymentRequestButtonElement id="paymentButton" /> */}
      {paymentElement}
      {/* <CardElement id="sds" options={options} /> */}
      {/* <CardNumber id="card-number" options={options} />
      <CardCVC id="card-cvc" options={options} />
      <CardExpiry id="card-expiry" options={options} /> */}

      {/* <button id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : x}
        </span>
      </button> */}
      {/* Show any error or success messages */}
      {/* {message && <div id="payment-message">{message}</div>} */}
    </form>
  );
}
