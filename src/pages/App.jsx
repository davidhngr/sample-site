import "../dist/scss/styles.scss";
import Navbar from "../components/Navbar/Navbar";
import FeatureBox from "../components/FeatureBox/FeatureBox";
import Section from "../components/Section/Section";

import platformDashboard from "../images/hero-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
          <div className="disclaimer">7 days free trial.</div>
        </div>
      </div>

      <div className="hero-img">
        <img src={platformDashboard} alt="saas-platform-dashboard" />
      </div>

      <div className="content">
        <div className="feature">
          <FeatureBox
            icon={faCode}
            header="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureBox
            icon={faCode}
            header="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureBox
            icon={faCode}
            header="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureBox
            icon={faCode}
            header="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>

      <div className="section-left-align">
        <Section
          className="section-left"
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <div className="section-cta">
            Learn more
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingLeft: 10 }}
              icon={faArrowRightLong}
            />
          </div>
        </Section>
        <Section className="section-right">
          <img src={platformDashboard} alt="saas" />
        </Section>
      </div>

      <div className="section-right-align">
        <Section className="section-left">
          <img src={platformDashboard} alt="saas" />
        </Section>
        <Section
          className="section-right"
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <div className="section-cta">
            Learn more
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingLeft: 10 }}
              icon={faArrowRightLong}
            />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
