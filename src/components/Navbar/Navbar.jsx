import * as React from "react";

import { Link } from "react-router-dom";
import { Menu, MenuItem } from "../Menu/Menu";

import {
  faCodeBranch,
  faCloudArrowUp,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [featureActive, setFeatureActive] = React.useState(false);
  let resizeTimer;

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 10);
  });

  const handleFeatureActive = (state) => {
    setFeatureActive(state);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          Logo
        </Link>

        <div className="nav">
          <ul
            className={`${!isMobile} ${"none"} : ${toggle ? "open" : "close"}`}
          >
            <Menu
              open={featureActive}
              handleOpen={handleFeatureActive}
              label="Features"
              labelOnClick={() => setFeatureActive((prevState) => !prevState)}
              toggle={featureActive ? "toggle-menu-open" : "toggle-menu"}
              toggleOnClick={(e) => {
                e.stopPropagation();
                setFeatureActive((prevState) => !prevState);
              }}
            >
              <MenuItem icon={faCodeBranch} label="Lorem Ipsum" />
              <MenuItem icon={faCloudArrowUp} label="Lorem Ipsum" />
              <MenuItem icon={faServer} label="Lorem Ipsum" />
            </Menu>

            <Link style={{ textDecoration: "none" }} to="/about">
              <Menu label="About"></Menu>
            </Link>
            <Menu label="Pricing"></Menu>
            <Menu label="Contact"></Menu>
          </ul>
        </div>

        <div className="button-container">
          <button className="button-small-outlined">Login</button>
          <button className="button-small-filled">Free trial</button>
        </div>
        <div className="toggle" onClick={() => setToggle((prev) => !prev)}>
          <div className={toggle ? "hamburger-open" : "hamburger"} />
        </div>
      </div>
    </nav>
  );
}
