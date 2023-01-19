import React, { useState } from "react";
import { loadHyper } from "@juspay-tech/hyper-js";
import { Elements } from "@juspay-tech/react-hyper-js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

const stripePromise = loadHyper("pk_snd_f2335975798246238ac421cac506b503");

export default function App() {
  const [clientSecret, setClientSecret] = useState("pay_sdsd_secret_sdsd");
  const [theme, setTheme] = React.useState("default");
  const [locale, setLocale] = React.useState("");
  const [layout, setLayout] = React.useState("tabs");

  const darkTheme = createTheme({
    palette: {
      mode:
        theme === "midnight" || theme === "soft" || theme === "flat"
          ? "dark"
          : "light",
    },
    typography: {
      fontFamily: "Poppins",
    },
  });
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    setLocale("");
  };

  let options = {
    clientSecret,
    appearance: {
      theme: theme,
    },
    fonts: [
      {
        cssSrc:
          "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap",
      },
      {
        cssSrc:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap",
      },
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Combo&display=swap",
      },
      {
        family: "something",
        src: "https://fonts.gstatic.com/s/combo/v21/BXRlvF3Jh_fIhj0lDO5Q82f1.woff2",
        weight: "700",
      },
    ],
    locale: locale,
    loader: "always",
  };

  let layout1 = {
    type: layout === "spaced" ? "accordion" : layout,
    defaultCollapsed: false,
    radios: true,
    spacedAccordionItems: layout === "spaced",
  };
  const options1 = {
    fields: {
      billingDetails: {
        address: {
          country: "auto",
          city: "auto",
        },
      },
    },
    layout: layout1,
    // layout: {
    //   type: 'orca',
    //   defaultCollapsed: false,
    //   radios: false,
    //   spacedAccordionItems: true
    // },
    paymentMethodOrder: ["klarna", "wechat_pay"],
    wallets: {
      applePay: "auto",
      googlePay: "auto",
    },
  };

  document.body.style.background =
    options.appearance.theme === "flat"
      ? "#030304f5"
      : options.appearance.theme === "midnight"
      ? "#1a1f36"
      : options.appearance.theme === "soft"
      ? "#3e3e3e"
      : options.appearance.theme === "brutal"
      ? "#7cff708a"
      : "#ddd8d812";
  var elements = (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm
        locale={options.locale}
        options1={options1}
        layout={layout}
        setLayout={setLayout}
      />
    </Elements>
  );

  return (
    <div className="App">
      {clientSecret && (
        <div>
          <ThemeProvider theme={darkTheme}>
            <div className="editor">
              <div className="menuHeader">{"Theme"}</div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={theme}
                  onChange={handleThemeChange}
                  sx={{
                    color: "#aaa7a7",
                  }}
                >
                  <FormControlLabel
                    value="default"
                    control={<Radio />}
                    label="Default"
                  />
                  <FormControlLabel
                    value="brutal"
                    control={<Radio />}
                    label="Brutal"
                  />
                  <FormControlLabel
                    value="midnight"
                    control={<Radio />}
                    label="Midnight"
                  />
                  <FormControlLabel
                    value="soft"
                    control={<Radio />}
                    label="Soft"
                  />
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="charcoal"
                    control={<Radio />}
                    label="Charcoal"
                  />
                </RadioGroup>
              </FormControl>

              {/* <div className="menuHeader">{"Language"}</div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={locale}
                  onChange={(event) => {
                    setLocale(event.target.value);
                    setTheme("");
                  }}
                  sx={{
                    color: "#aaa7a7",
                  }}
                >
                  <FormControlLabel
                    value="auto"
                    control={<Radio />}
                    label="Auto"
                  />
                  <FormControlLabel
                    value="ar"
                    control={<Radio />}
                    label="Arabic"
                  />
                  <FormControlLabel
                    value="ja"
                    control={<Radio />}
                    label="Japanese"
                  />
                </RadioGroup>
              </FormControl> */}
              <div className="menuHeader">{"Layout"}</div>
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
                  <FormControlLabel
                    value="tabs"
                    control={<Radio />}
                    label="Tabs"
                  />
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

            {theme === "default" && elements}
            {theme === "brutal" && elements}
            {theme === "midnight" && elements}
            {theme === "soft" && elements}
            {theme === "charcoal" && elements}
            {theme === "none" && elements}

            {/* {locale === "ar" && elements}
            {locale === "ja" && elements}
            {locale === "auto" && elements} */}
          </ThemeProvider>
        </div>
      )}
    </div>
  );
}
