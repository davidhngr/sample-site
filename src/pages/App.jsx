import React from "react";
import "../dist/scss/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppWithApollo } from "../lib/AppProvider";
import { AuthContext } from "../lib/AuthProvider";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Login from "./Login";
import Account from "./Account";

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

function App() {
  const { loading } = React.useContext(AuthContext);

  if (!loading) {
    return (
      <AppWithApollo>
        <BrowserRouter>
          <Cookie />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={null} />
            <Route path="/contact" element={null} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </AppWithApollo>
    );
  } else {
    return (
      <div className="loading">Loading...</div>
    )
  }
}

export default App;
