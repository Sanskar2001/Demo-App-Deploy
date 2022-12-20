function PaymentElement(componentType) {
    this.componentType = componentType;
    this.mount = (selector) => {
        let oElement = document.querySelector(selector);

        if (oElement) {
            oElement.innerHTML = `<iframe src="https://orca-pp.netlify.app/?componentName=${componentType}" style="border: 0px;" width="100%" height="100%"></iframe> `;
        }
    };
}

function Elements(obj) {
    this.obj = obj;

    this.create = (componentType) => {
        return new PaymentElement(componentType);
    };
}

function StripeInstance(key) {
    this.key = key;
    this.iframeElem = null;
    this.clientSecret = null;
    this.appearance = null;
    this.locale = null;
    this.fonts = null;

    this.elements = (obj) => {
        return new Elements(obj);
    };

    this.confirmPayment = ({ elements, confirmParams }) => {
        console.log("will be confirming payment and redirect", this.iframeElem);

        return new Promise((resolve, _reject) => {
            if (this.iframeElem) {
                this.iframeElem.contentWindow.postMessage(
                    `{"doSubmit": true, "clientSecret":"${this.clientSecret}"}`,
                    "*"
                );
                const handleMessage = (ev) => {
                    try {
                        const json = ev.data;

                        if (typeof json.submitSuccessful === "boolean") {
                            // window.removeEventListener("message", handleMessage);
                            if (json.submitSuccessful) {
                                let url = confirmParams && confirmParams.return_url;

                                if (url) {
                                    window.location.replace(url);
                                }
                            } else {
                                resolve(json);
                            }
                        }
                    } catch (err) {
                        //
                    }
                };

                window.addEventListener("message", handleMessage);
            }
        });
    };
}

const loadJuspay = (str) => {
    return Promise.resolve(new StripeInstance(str));
};
export const loadStripe = loadJuspay;

const Stripe = (str) => {
    return new StripeInstance(str);
};
var isUnknownObject = function isUnknownObject(raw) {
    return raw !== null && typeof raw === "object";
};
var isPromise = function isPromise(raw) {
    return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe(raw) {
    return (
        isUnknownObject(raw) &&
        typeof raw.elements === "function" &&
        typeof raw.createToken === "function" &&
        typeof raw.createPaymentMethod === "function" &&
        typeof raw.confirmCardPayment === "function"
    );
};

var validateStripe = function validateStripe(maybeStripe) {
    if (maybeStripe === null || isStripe(maybeStripe)) {
        return maybeStripe;
    }

    throw new Error("INVALID_STRIPE_ERROR");
};

var parseJuspayProd = function parseJuspayProp(raw) {
    if (isPromise(raw)) {
        return {
            tag: "async",
            stripePromise: Promise.resolve(raw).then(validateStripe),
        };
    }

    var stripe = validateStripe(raw);

    if (stripe === null) {
        return {
            tag: "empty",
        };
    }

    return {
        tag: "sync",
        stripe: stripe,
    };
};

const stripe = Stripe(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);
const elements = stripe.elements({ appearance: "ehll", clientSecret: "wow" });
const paymentElement = elements.create("payment");
paymentElement.mount("#pull-request-details");