import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { loadHyper } from "@juspay-tech/hyper-js";
import { Elements } from "@juspay-tech/react-hyper-js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CheckoutForm from "./CheckoutForm";
import { FormControl, Select, MenuItem, Button } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const useStyles = (theme) =>
  makeStyles(() => ({
    selected: {
      color: theme === "midnight" || theme === "soft" ? "#FFFFFF" : "#000000",
      borderBottom:
        theme === "midnight" || theme === "soft"
          ? "2px solid white"
          : "2px solid black",
      "& .MuiSvgIcon-root": {
        color: theme === "midnight" || theme === "soft" ? "#FFFFFF" : "#000000",
      },
    },
  }));

export default function App() {
  let iframeRef = useRef();
  const [clientSecret, setClientSecret] = useState(null);
  const [stripePromise, setStripePromise] = useState(null);

  const fetcher = async () => {
    let response = await fetch(
      "https://u4kkpaenwc.execute-api.ap-south-1.amazonaws.com/default/create-payment-intent",
      {
        method: "POST",
        body: JSON.stringify({
          amount: 6541,
          currency: "USD",
          confirm: false,
          capture_method: "automatic",
          authentication_type: "no_three_ds",
        }),
      }
    );

    const data = await response.json();
    setClientSecret(data.clientSecret);
    setStripePromise(loadHyper(data.publishableKey));

    let obj = {
      initialProps: {
        props: {
          publishableKey: data.publishableKey,
          configuration: {
            // "appearance": appearance,
            allowsDelayedPaymentMethods: true,
            merchantDisplayName: "Example, Inc.",
            allowsPaymentMethodsRequiringShippingAddress: false,
            googlePay: {
              environment: "Test",
              countryCode: "US",
              currencyCode: "US",
            },
          },
          appId: "com.example.nativeapp",
          type: "payment",
          clientSecret: data.clientSecret,
        },
      },
    };

    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify(obj), "*");
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  const [theme, setTheme] = React.useState("default");
  // const [locale, setLocale] = React.useState("");
  const [layout, setLayout] = React.useState("tabs");
  const [themeValues] = React.useState(["Default", "Brutal", "Midnight"]);

  const [themeValues2] = React.useState(["Soft", "Charcoal"]);
  const [layoutValues] = React.useState(["Tabs", "Accordion", "Spaced"]);
  const [selectedTheme, setSelectedTheme] = useState("Default");
  const [selectedLayout, setSelectedLayout] = useState("Tabs");
  const styles = useStyles(theme)();

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
    setTheme(event.target.value.toLowerCase());
    setSelectedTheme(event.target.value);
  };

  const handleThemeChange2 = (value) => {
    setTheme(value.toLowerCase());
    setSelectedTheme(value);
  };

  const handleLayoutChange = (event) => {
    setLayout(event.target.value.toLowerCase());
    setSelectedLayout(event.target.value);
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
    // locale: locale,
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
    // paymentMethodOrder: ["cards", "klarna"],
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm
          // locale={options.locale}
          options1={options1}
          layout={layout}
          setLayout={setLayout}
        />
      </Elements>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            clientSecret &&
            stripePromise && (
              <div>
                <div>
                  <ThemeProvider theme={darkTheme}>
                    <div
                      style={{
                        display: "block",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "none",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginRight: "10px",
                            fontWeight: "bold",
                            borderBottom: "0",
                          }}
                          className={styles.selected}
                        >
                          {"Theme "}
                        </div>
                        <FormControl>
                          <Select
                            style={{
                              borderBottom: "0",
                            }}
                            value={selectedTheme}
                            onChange={handleThemeChange}
                            className={styles.selected}
                            inputProps={{
                              name: "theme",
                              id: "theme",
                            }}
                          >
                            {themeValues.map((value, index) => {
                              return (
                                <MenuItem key={index} value={value}>
                                  {value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        {themeValues.map((value) => {
                          return (
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{ margin: "10px" }}
                              onClick={() => {
                                handleThemeChange2(value);
                              }}
                            >
                              {value}
                            </Button>
                          );
                        })}
                      </div>

                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        {themeValues2.map((value) => {
                          return (
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{ margin: "10px" }}
                              onClick={() => {
                                handleThemeChange2(value);
                              }}
                            >
                              {value}
                            </Button>
                          );
                        })}
                      </div>

                      <div
                        style={{
                          display: "none",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginRight: "10px",
                            fontWeight: "bold",
                            borderBottom: "0",
                          }}
                          className={styles.selected}
                        >
                          {"Layout -"}
                        </div>
                        <FormControl>
                          <Select
                            style={{
                              borderBottom: "0",
                            }}
                            value={selectedLayout}
                            onChange={handleLayoutChange}
                            className={styles.selected}
                            inputProps={{
                              name: "layout",
                              id: "layout",
                            }}
                          >
                            {layoutValues.map((value, index) => {
                              return (
                                <MenuItem key={index} value={value}>
                                  {value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    {theme === "default" && elements}
                    {theme === "brutal" && elements}
                    {theme === "midnight" && elements}
                    {theme === "soft" && elements}
                    {theme === "charcoal" && elements}

                    {/* {locale === "ar" && elements}
              {locale === "ja" && elements}
              {locale === "auto" && elements} */}
                  </ThemeProvider>
                </div>
              </div>
            )
          }
        />
        <Route
          path="mobile"
          element={
            <div className="section">
              <div className="phone">
                <div className="screen">
                  <iframe
                    title="Mobile"
                    src="/HsIframe.html"
                    width="440px"
                    height="878px"
                    ref={iframeRef}
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
