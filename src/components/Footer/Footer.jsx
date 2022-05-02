import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookSquare, faInstagram, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">Logo</div>

        <div className="nav">
          <ul className="nav-container">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>

            <li>
              <a>Pricing</a>
            </li>

            <li>
              <a>Blog</a>
            </li>

            <li>
              <a>Privacy & Terms</a>
            </li>

            <div className="socials">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
