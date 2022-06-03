import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function TextInput({ inputLabel, html, ...rest }) {
    const [active, setActive] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    let elementField = React.useRef(null);
    let type;
  
    if (isVisible && html === "password") {
      type = "text";
    } else if (html !== "password") {
      type = "text";
    } else {
      type = "password";
    }
  
    React.useEffect(() => {
      if (elementField && elementField.value.length !== 0) {
        setActive(true);
      }
    });
  
    return (
      <div className="input">
        <label
          className={active ? "input-label-active" : "input-label-inactive"}
          htmlFor={html}
        >
          {inputLabel}
        </label>
        {html === "password" && (
          <FontAwesomeIcon
            className="secure-text"
            icon={isVisible ? faEye : faEyeSlash}
            onClick={() => setIsVisible((prev) => !prev)}
          />
        )}
        <input
          className="input-field"
          type={type}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          ref={(value) => (elementField = value)}
          {...rest}
        />
      </div>
    );
  }
  