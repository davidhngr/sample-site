import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({icon, label}) {
  return (
    <div className="menu-item">
      <FontAwesomeIcon
        style={{ width: 20, padding: 20, fontSize: 14 }}
        icon={icon}
      />
      {label}
    </div>
  );
}
