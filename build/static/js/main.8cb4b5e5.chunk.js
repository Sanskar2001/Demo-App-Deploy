/*! For license information please see main.8cb4b5e5.chunk.js.LICENSE.txt */
(this["webpackJsonpstripe-sample"]=this["webpackJsonpstripe-sample"]||[]).push([[0],{77:function(e,t,a){e.exports=a(86)},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(24),c=a.n(o),l=a(8),i=a(57),u=a(28),s=a(62),f=a(134),d=a(128),p=a(131),h=a(135),m=a(130),y=a(58);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,a){return e[t]=a}}function u(e,t,a,n){var o=t&&t.prototype instanceof d?t:d,c=Object.create(o.prototype),l=new _(n||[]);return r(c,"_invoke",{value:O(e,a,l)}),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var f={};function d(){}function p(){}function h(){}var m={};i(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&a.call(g,o)&&(m=g);var b=h.prototype=d.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;r(this,"_invoke",{value:function(r,o){function c(){return new t((function(n,c){!function r(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var u=i.arg,f=u.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,l)}))}l(i.arg)}(r,o,n,c)}))}return n=n?n.then(c,c):c()}})}function O(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return k()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var l=x(c,a);if(l){if(l===f)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===f)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}function x(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),f;var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=h,r(b,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),i(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new w(u(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(b),i(b,l,"Generator"),i(b,o,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;j(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},e}function g(e){var t=e.locale,a=e.selectedMenu,o=e.options1,c=e.layout,i=e.setLayout,s=Object(u.d)(),f=Object(u.c)(),g=Object(r.useState)(null),b=Object(l.a)(g,2),E=b[0],w=b[1],O=Object(r.useState)(!1),x=Object(l.a)(O,2),L=x[0],j=x[1],_=Object(r.useState)(null),S=Object(l.a)(_,2);S[0],S[1];Object(r.useEffect)((function(){if(s){var e=new URLSearchParams(window.location.search).get("order_id");e&&s.retrievePaymentIntent(e).then((function(e){var t=e.paymentIntent;switch(console.log("inisde effect",t),t.status){case"succeeded":w("Payment succeeded!");break;case"processing":w("Your payment is processing.");break;case"requires_payment_method":w("Your payment was not successful, please try again.");break;default:w("Something went wrong.")}}))}}),[s]);var k=function(){var e=Object(y.a)(v().mark((function e(t){var a,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s&&f){e.next=3;break}return e.abrupt("return");case 3:return j(!0),console.log("ELEMENTS",f),e.next=7,s.confirmPayment({elements:f,confirmParams:{return_url:"http://localhost:3000/complete"}});case 7:a=e.sent,r=a.error,console.log("ERORR",r),"card_error"===r.type||"validation_error"===r.type?w(r.message):w("An unexpected error occurred."),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N="ja"===t.locale?"\u4eca\u6255\u3046":"ar"===t.locale?"\u0627\u062f\u0641\u0639 \u0627\u0644\u0622\u0646":"Pay Now",P=n.a.createElement(u.b,{id:"paymentElement",options:o}),A=n.a.createElement(n.a.Fragment,null," ","accordion"===c&&P,"tabs"===c&&P,"spaced"===c&&P);return n.a.createElement("form",{id:"payment-form",onSubmit:k},a&&n.a.createElement("div",{className:"layout"},n.a.createElement("div",{className:"menuHeader"},"Layout"),n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:c,onChange:function(e){i(e.target.value)},sx:{color:"#aaa7a7"}},n.a.createElement(h.a,{value:"tabs",control:n.a.createElement(d.a,null),label:"Tabs"}),n.a.createElement(h.a,{value:"accordion",control:n.a.createElement(d.a,null),label:"Accordion"}),n.a.createElement(h.a,{value:"spaced",control:n.a.createElement(d.a,null),label:"Spaced Accordion"})))),A,n.a.createElement("button",{id:"submit"},n.a.createElement("span",{id:"button-text"},L?n.a.createElement("div",{className:"spinner",id:"spinner"}):N)),E&&n.a.createElement("div",{id:"payment-message"},E))}a(63),a(133);var b=a(7),E=a(127);a(126),a(136),a(137),a(90),Object(b.a)(E.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));a(85);var w=Object(i.a)("pk_snd_f2335975798246238ac421cac506b503");function O(){var e=Object(r.useState)("pay_sdsd_secret_sdsd"),t=Object(l.a)(e,2),a=t[0],o=(t[1],n.a.useState("default")),c=Object(l.a)(o,2),i=c[0],y=c[1],v=n.a.useState(""),b=Object(l.a)(v,2),E=b[0],O=b[1],x=n.a.useState("tabs"),L=Object(l.a)(x,2),j=L[0],_=L[1],S=Object(s.a)({palette:{mode:"midnight"===i||"soft"===i||"flat"===i?"dark":"light"},typography:{fontFamily:"Poppins"}}),k={clientSecret:a,appearance:{theme:i},fonts:[{cssSrc:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"},{cssSrc:"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap"},{cssSrc:"https://fonts.googleapis.com/css2?family=Combo&display=swap"},{family:"something",src:"https://fonts.gstatic.com/s/combo/v21/BXRlvF3Jh_fIhj0lDO5Q82f1.woff2",weight:"700"}],locale:E,loader:"always"},N={fields:{billingDetails:{address:{country:"auto",city:"auto"}}},layout:{type:"spaced"===j?"accordion":j,defaultCollapsed:!1,radios:!0,spacedAccordionItems:"spaced"===j},paymentMethodOrder:["klarna","wechat_pay"],wallets:{applePay:"auto",googlePay:"auto"}};document.body.style.background="flat"===k.appearance.theme?"#030304f5":"midnight"===k.appearance.theme?"#1a1f36":"soft"===k.appearance.theme?"#3e3e3e":"brutal"===k.appearance.theme?"#7cff708a":"#ddd8d812";var P=n.a.createElement(u.a,{options:k,stripe:w},n.a.createElement(g,{locale:k.locale,options1:N,layout:j,setLayout:_}));return n.a.createElement("div",{className:"App"},a&&n.a.createElement("div",null,n.a.createElement(f.a,{theme:S},n.a.createElement("div",{className:"editor"},n.a.createElement("div",{className:"menuHeader"},"Theme"),n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:i,onChange:function(e){y(e.target.value),O("")},sx:{color:"#aaa7a7"}},n.a.createElement(h.a,{value:"default",control:n.a.createElement(d.a,null),label:"Default"}),n.a.createElement(h.a,{value:"brutal",control:n.a.createElement(d.a,null),label:"Brutal"}),n.a.createElement(h.a,{value:"midnight",control:n.a.createElement(d.a,null),label:"Midnight"}),n.a.createElement(h.a,{value:"soft",control:n.a.createElement(d.a,null),label:"Soft"}),n.a.createElement(h.a,{value:"none",control:n.a.createElement(d.a,null),label:"None"}),n.a.createElement(h.a,{value:"charcoal",control:n.a.createElement(d.a,null),label:"Charcoal"}))),n.a.createElement("div",{className:"menuHeader"},"Layout"),n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:j,onChange:function(e){_(e.target.value)},sx:{color:"#aaa7a7"}},n.a.createElement(h.a,{value:"tabs",control:n.a.createElement(d.a,null),label:"Tabs"}),n.a.createElement(h.a,{value:"accordion",control:n.a.createElement(d.a,null),label:"Accordion"}),n.a.createElement(h.a,{value:"spaced",control:n.a.createElement(d.a,null),label:"Spaced Accordion"})))),"default"===i&&P,"brutal"===i&&P,"midnight"===i&&P,"soft"===i&&P,"charcoal"===i&&P,"none"===i&&P)))}c.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.8cb4b5e5.chunk.js.map