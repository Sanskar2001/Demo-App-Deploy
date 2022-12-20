const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
//const stripe = require("stripe")('sk_test_51KP0OALGEyT9T908osoVeWhMnrKSg6YibXTA84rLY5gGWvahr3uHZhAjKGXFicuNgPbZv2uYhIiylKsDHpKBcNuz00da02MYkB');
const stripe = require("@juspay-tech/orca-node")('snd_ac2473e233b048f2ab7576e1c03e99dc');
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 6500;
};


app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "USD",
    automatic_payment_methods: {
      enabled: true,
    },
    // authentication_type: "no_three_ds",
    // shipping: {
    //   address: {
    //     state: "zsaasdas",
    //     city: "Banglore",
    //     country: "US",
    //     line1: "sdsdfsdf",
    //     postal_code: "571201",
    //   },
    //   name: "Bopanna",
    // }
    // payment_method_data: {
    //   type: "affirm",
    //   billing_details: {
    //     address: {
    //       state: "Karnataka",
    //       city: "Banglore",
    //       country: "US",
    //       line1: "sdsdfsdf",
    //       postal_code: "571201",
    //     },
    //     name: "Bopanna M J",
    //     email: "bopannamj@gmail.com",
    //     phone: "8105522221"
    //   }
    // }
  });


  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.post("/create-customer", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: calculateOrderAmount(items),
  //   currency: "USD",
  //   automatic_payment_methods: {
  //     enabled: true,
  //   },
  //   payment_method_options: {
  //     card: {
  //       request_three_d_secure: "any"
  //     }
  //   },
  //   // authentication_type: "no_three_ds",
  //   // shipping: {
  //   //   address: {
  //   //     state: "zsaasdas",
  //   //     city: "Banglore",
  //   //     country: "US",
  //   //     line1: "sdsdfsdf",
  //   //     postal_code: "571201",
  //   //   },
  //   //   name: "Bopanna",
  //   // },
  //   // payment_method_data: {
  //   //   type: "affirm",
  //   //   billing_details: {
  //   //     address: {
  //   //       state: "Karnataka",
  //   //       city: "Banglore",
  //   //       country: "US",
  //   //       line1: "sdsdfsdf",
  //   //       postal_code: "571201",
  //   //     },
  //   //     name: "Bopanna M J",
  //   //     email: "bopannamj@gmail.com",
  //   //     phone: "8105522221"
  //   //   }
  //   // }
  // });
  const customer = await stripe.customers.create({
    description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    email: "bopannamj@gmail.com"
  });


  res.send({
    customer: customer.id,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));