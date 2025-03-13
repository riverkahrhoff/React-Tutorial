import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <span
        className={`d-inline-block ${open ? "" : "text-truncate"}`}
        style={{
          maxWidth: open ? "none" : "50px",
          whiteSpace: open ? "normal" : "nowrap",
          display: open ? "block" : "inline-block",
        }}
        title={children}
      >
        {children}
      </span>
      <button
        className={`btn btn-${open ? "secondary" : "primary"}`}
        onClick={handleClick}
      >
        {open ? "Close Me" : "Open Me"}
      </button>
    </div>
  );
};

export default ExpandableText;
