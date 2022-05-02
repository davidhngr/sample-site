import "../dist/scss/styles.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FeatureBox from "../components/FeatureBox/FeatureBox";
import Section from "../components/Section/Section";
import Bubble from "../components/Bubble/Bubble";
import Testemonial from "../components/Testemonial/Testemonial";

import platformDashboard from "../images/hero-dashboard.png";
import userAvatar from "../images/photo-1648406062026-88d6ab60c431.jpeg"
;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightLong,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

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

        <img
          className="hero-img"
          src={platformDashboard}
          alt="saas-platform-dashboard"
        />
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

      <div className="content">
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
      </div>

      <div className="content">
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

      <div className="content">
        <Bubble
          iconLeft={faCode}
          contentLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          iconRight={faArrowRightLong}
          contentRight="Start free trial"
        />
      </div>

      <div className="content">
        <div className="testemonial-container">
          <div className="testemonial-header">
            <div className="testemonial-header-1">
              Lorem ipsum dolor sit amet
            </div>
            <div className="testemonial-header-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </div>
          </div>

          <div className="testemonials">
            <Testemonial
              avatar={userAvatar}
              name="John Doe"
              role="Entrepreneur"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
            />

            <Testemonial
              avatar={userAvatar}
              name="John Doe"
              role="Entrepreneur"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Testemonial
              avatar={userAvatar}
              name="John Doe"
              role="Entrepreneur"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
            />

            <Testemonial
              avatar={userAvatar}
              name="John Doe"
              role="Entrepreneur"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Testemonial
              avatar={userAvatar}
              name="John Doe"
              role="Entrepreneur"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
            />
          </div>
        </div>
      </div>

      <div className="cta-container">
        <div className="cta">
          <div className="cta-header-1">Lorem ipsum dolor sit amet</div>
          <div className="cta-header-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </div>

          <button className="button">
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingRight: 10 }}
              icon={faArrowRightLong}
            />
            Free Trial
          </button>
          <div className="disclaimer">7 days free trial.</div>

          <img src={platformDashboard} alt="dashboard" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
