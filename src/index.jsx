import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import App from "./pages/App";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";

const Cookie = () => {
  const [consent, setConsent] = React.useState(null);

  React.useEffect(() => {
    setConsent(localStorage.getItem("consent"));
  }, [consent]);

  const acceptCookie = () => {
    localStorage.setItem("consent", "true");
    setConsent(localStorage.getItem("consent"));
  };

  const declineCookie = () => {
    localStorage.setItem("consent", "false");
    setConsent(localStorage.getItem("consent"));
  };

  if (consent === null) {
    return (
      <div className="cookie">
        <div className="cookie-container">
          <div className="cookie-header">Cookie & Privacy</div>
          <div className="cookie-body">
            This website uses cookies to ensure you get the best experience on
            our website.
          </div>
          <div className="cookie-cta">
            <div className="button" onClick={acceptCookie}>
              Accept
            </div>
            <div className="button" onClick={declineCookie}>
              Decline
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Cookie />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
