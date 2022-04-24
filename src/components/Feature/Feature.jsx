import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function FeatureBox({ icon, header, content }) {
  return (
    <div className="box">
      <div className="box-header">
        <FontAwesomeIcon
          style={{ fontSize: 14, paddingRight: 10 }}
          icon={icon}
        />
        {header}
      </div>
      <div className="box-content">{content}</div>
      <div className="box-underline" />
    </div>
  );
}

export default function Feature() {
  return (
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
  );
}
