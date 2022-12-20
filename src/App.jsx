import React, { useState, useEffect } from "react";
import { loadStripe } from "@juspay/orca-js";
import { Elements } from "@juspay/react-orca-js";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckoutForm from "./CheckoutForm";
import DialogComp from "./DialogComp";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
//const stripePromise = loadStripe("pk_test_51KP0OALGEyT9T908Fv0PuwhRMQ2N9sWsrwZQS5hvTan6m6e73Bsv42DyTQwiw63jlluM1tvzeemOrXlE1AvmKY3D00R0yeN1my");
const stripePromise = loadStripe("pk_snd_f2335975798246238ac421cac506b503");


export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [theme, setTheme] = React.useState('default');
  const [locale, setLocale] = React.useState('');



  const darkTheme = createTheme({
    palette: {
      mode: (theme == "midnight" || theme == "soft" || theme == "flat") ? "dark" : "light",
    },
    typography: {
      fontFamily: 'Poppins',
    },
  });
  const handleThemeChange = (event) => {

    setTheme((event.target).value);
    setLocale("")
  };
  const handleClose = () => {
    setOpenMenu(false)
    setAnchorEl(null);
  };

  let options = {
    clientSecret,
    appearance: {
      theme: theme,
    },
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap'
      },
      {
        cssSrc: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap'
      },
      {
        cssSrc: 'https://fonts.googleapis.com/css2?family=Combo&display=swap'
      },
      {
        family: "something",
        src: "https://fonts.gstatic.com/s/combo/v21/BXRlvF3Jh_fIhj0lDO5Q82f1.woff2",
        weight: "700",
      }
    ],
    locale: locale,
    loader: "always",
  }

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {

        setClientSecret(data.clientSecret)
      });
  }, []);

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("http://192.168.1.200:8080/payments", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "api-key": "dev_01cce11fbfe4437bb065d9084e4c624d" },
  //     body: JSON.stringify({
  //       "amount": 6541,
  //       "currency": "USD",
  //       "capture_method": "automatic",
  //       "authentication_type": "three_ds"
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientSecret(data.client_secret)
  //     });
  // }, []);

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("http://192.168.1.200:4242/create-customer", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCustomerId(data.customer)
  //     });
  // }, []);




  document.body.style.background = options.appearance.theme == "flat" ? "#030304f5" : options.appearance.theme == "midnight" ? "#1a1f36" : options.appearance.theme == "soft" ? "#3e3e3e" : "#ddd8d812";
  var elements = <Elements options={options} stripe={stripePromise}>
    <CheckoutForm locale={options.locale} />
  </Elements>

  return (
    <div className="App" >
      {clientSecret && (
        <div>
          <ThemeProvider theme={darkTheme}>
            <div className="editor">

              <Fab color="primary" aria-label="add" onClick={event => {
                setOpenMenu(true)
                setAnchorEl(event.currentTarget);
              }}>
                <AddIcon />
              </Fab>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={_ => {
                  setSelectedMenu("Themes")
                  handleClose()
                }} >Themes</MenuItem>
                <MenuItem onClick={_ => {
                  setSelectedMenu("Language")
                  handleClose()
                }}>Language</MenuItem>
              </Menu>
              <div className="menuHeader">{selectedMenu}</div>
              {selectedMenu == "Themes" &&
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={theme}
                    onChange={handleThemeChange}
                    sx={{
                      color: '#aaa7a7',
                    }}
                  >
                    <FormControlLabel value="default" control={<Radio />} label="Default" />
                    <FormControlLabel value="midnight" control={<Radio />} label="Midnight" />
                    <FormControlLabel value="soft" control={<Radio />} label="Soft" />
                    <FormControlLabel value="flat" control={<Radio />} label="Flat" />
                    <FormControlLabel value="charcoal" control={<Radio />} label="Charcoal" />
                  </RadioGroup>
                </FormControl>
              }
              {selectedMenu == "Language" &&
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={locale}
                    onChange={event => {
                      setLocale((event.target).value)
                      setTheme("")

                    }}
                    sx={{
                      color: '#aaa7a7',
                    }}
                  >
                    <FormControlLabel value="auto" control={<Radio />} label="Auto" />
                    <FormControlLabel value="ar" control={<Radio />} label="Arabic" />
                    <FormControlLabel value="ja" control={<Radio />} label="Japanese" />

                  </RadioGroup>
                </FormControl>
              }

            </div>
            <div className="dialog">
              <DialogComp />
            </div>
            {theme == "default" && elements}
            {theme == "flat" && elements}
            {theme == "midnight" && elements}
            {theme == "soft" && elements}
            {theme == "charcoal" && elements}
            {locale == "ar" && elements}
            {locale == "ja" && elements}
            {locale == "auto" && elements}
          </ThemeProvider>
        </div>

      )
      }
    </div >
  );
}