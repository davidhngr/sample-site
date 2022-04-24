import "../dist/scss/styles.scss";
import Navbar from "../components/Navbar/Navbar";
import Feature from "../components/Feature/Feature";

import platformDashboard from "../images/hero-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-container">
        <div className="content">
          <h4>Lorem ipsum dolor sit amet</h4>
        </div>

        <div className="content">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>

        <div className="content">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h2>
        </div>

        <div className="content">
          <button className="button">
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingRight: 10 }}
              icon={faArrowRightLong}
            />
            Free trial
          </button>
        </div>
      </div>
      <div className="hero-img">
        <div className="content">
          <img src={platformDashboard} alt="saas-platform-dashboard" />
        </div>
      </div>
      <div className="content">
        <Feature />
      </div>
    </div>
  );
}

export default App;
