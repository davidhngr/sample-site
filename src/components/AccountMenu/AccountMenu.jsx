import React from "react";
import { Link } from "react-router-dom";

export function AccountMenu({
  open,
  handleOpen,
  onClick,
  avatar,
  profileName,
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
    <React.Fragment>
      <img
        className="profile-avatar"
        onClick={onClick}
        src={avatar}
        alt="user-avatar"
        ref={tabRef}
      />
      {open && (
        <div className="menu" ref={menuRef}>
          <div className="profile-tab">
            <div className="user">
              <img className="user-avatar" src={avatar} alt="user-avatar" />
              <div className="user-name">
                {profileName.substring(0, 10) + "..."}
              </div>
            </div>

            <Link style={{ textDecoration: "none" }} to="/account">
              <div className="button">Edit Profile</div>
            </Link>
          </div>
          {children}
        </div>
      )}
    </React.Fragment>
  );
}
