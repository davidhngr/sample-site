import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu({
  open,
  handleOpen,
  label,
  labelOnClick,
  toggle,
  toggleOnClick,
  children,
}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        window.innerWidth > 768
      ) {
        handleOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <li>
      <a>
        <div className="label" onClick={labelOnClick}>
          {label}
          {window.innerWidth < 768 && (
            <div className={toggle} onClick={toggleOnClick} />
          )}
        </div>
        {open && (
          <div className="menu" ref={ref}>
            {children}
          </div>
        )}
      </a>
    </li>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <FontAwesomeIcon style={{ width: 20, padding: 20 }} icon={icon} />
      {label}
    </div>
  );
}

export { Menu, MenuItem };
