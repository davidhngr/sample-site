import * as React from "react";

export default function Menu({ open, handleOpen, children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (open) {
    return (
      <div className="menu" ref={ref}>
        {children}
      </div>
    );
  }
}
