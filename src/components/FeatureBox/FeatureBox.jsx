import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeatureBox({ icon, header, content }) {
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
