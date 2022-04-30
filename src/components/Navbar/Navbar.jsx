import * as React from "react";

import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";

import {
  faCodeBranch,
  faCloudArrowUp,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [featureActive, setFeatureActive] = React.useState(false);

  const handleFeatureActive = (state) => {
    setFeatureActive(state);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>

        <ul>
          <li>
            <a onClick={() => setFeatureActive((prev) => !prev)}>
              <div className="label">Features</div>

              <Menu open={featureActive} handleOpen={handleFeatureActive}>
                <MenuItem icon={faCodeBranch} label="Lorem Ipsum" />

                <MenuItem icon={faCloudArrowUp} label="Lorem Ipsum" />

                <MenuItem icon={faServer} label="Lorem Ipsum" />
              </Menu>
            </a>
          </li>

          <li>
            <a>
              <div className="label">About</div>
            </a>
          </li>

          <li>
            <a>
              <div className="label">Pricing</div>
            </a>
          </li>

          <li>
            <a>
              <div className="label">Contact</div>
            </a>
          </li>
        </ul>

        <div className="button-container">
          <button className="button-small-outlined">Login</button>
          <button className="button-small-filled">Free trial</button>
        </div>
      </div>
    </nav>
  );
}
