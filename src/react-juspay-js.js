import React from "react";

const SomeContext = React.createContext(null);

export const Elements = ({ children, stripe, options }) => {
    const [someState, setSomeState] = React.useState(null);

    React.useEffect(() => {
        const stripePromise = Promise.resolve(stripe);
        const appearance = {
            theme: 'flat'
        };
        stripePromise.then((stripeVal) => {
            stripeVal.clientSecret = options.clientSecret;
            stripeVal.appearance = appearance
            stripeVal.locale = options.locale
            setSomeState(stripeVal);
        });
    }, [stripe]);

    if (someState) {
        console.log("someState", someState);
        return (
            <SomeContext.Provider value={someState}>{children}</SomeContext.Provider>
        );
    } else {
        return "Loading...";
    }
};

export const useStripe = () => {
    return React.useContext(SomeContext);
};

export const PaymentElement = ({ }) => {
    const iframeRef = React.useRef();
    const someRef = React.useRef();

    const stripe = useStripe();

    const appearance = encodeURIComponent(JSON.stringify(stripe.appearance))

    return (
        <div>
            <iframe
                src={`http://localhost:9050/`}
                style={{ border: "0px" }}
                width="100%"
                height="auto"
                ref={iframeRef}
            ></iframe>
        </div>
    );
};
export const CardElement = ({ }) => {
    return (
        <iframe
            src={`https://orca-pp.netlify.app/?componentName=card`}
            style={{ border: "0px" }}
            width="100%"
            height="100%"
        ></iframe>
    );
};

export const useElements = () => {
    return {};
};