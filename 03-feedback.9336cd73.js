!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("1WSnx"),o=document.querySelector(".feedback-form"),l=document.querySelector("input"),i=document.querySelector("textarea"),c="feedback-form-state",s=n.throttle((function(e){u.email=o.elements.email.value,u.message=o.elements.message.value,localStorage.setItem(c,JSON.stringify(u))}),500);o.addEventListener("input",s),o.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(c))),localStorage.clear(),o.reset()}));var u={email:"",message:""};!function(){var e=localStorage.getItem(c),t=JSON.parse(e);try{l.value=t.email}catch(e){}try{i.value=t.message}catch(e){}}()}();
//# sourceMappingURL=03-feedback.9336cd73.js.map
