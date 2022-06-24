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
  const menuRef = React.useRef(null);
  const tabRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !tabRef.current.contains(event.target) &&
        window.innerWidth > 768
      ) {
        handleOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <li>
      <a>
        <div className="label" onClick={labelOnClick} ref={tabRef}>
          {label}
          {window.innerWidth < 768 && (
            <div className={toggle} onClick={toggleOnClick} />
          )}
        </div>
        {open && (
          <div className="menu" ref={menuRef}>
            {children}
          </div>
        )}
      </a>
    </li>
  );
}

function MenuItem({ icon, label, ...rest }) {
  return (
    <div className="menu-item" {...rest}>
      <FontAwesomeIcon style={{ width: 20, padding: 20 }} icon={icon} />
      {label}
    </div>
  );
}

export { Menu, MenuItem };
