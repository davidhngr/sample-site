import "../dist/scss/styles.scss";
import Navbar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
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
          <div className="button">
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingRight: 10 }}
              icon={faArrowRightLong}
            />
            Click here
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
