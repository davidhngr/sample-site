import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bubble({
  iconLeft,
  contentLeft,
  iconRight,
  contentRight,
}) {
  return (
    <div className="bubble">
      <div className="bubble-container">
        <div className="bubble-left">
          <FontAwesomeIcon
            style={{ fontSize: 14, paddingRight: 10 }}
            icon={iconLeft}
          />
          {contentLeft}
        </div>
        <div className="bubble-right">
          <div className="bubble-cta">
            <FontAwesomeIcon
              style={{ fontSize: 14, paddingRight: 10 }}
              icon={iconRight}
            />
            {contentRight}
          </div>
        </div>
      </div>
    </div>
  );
}
