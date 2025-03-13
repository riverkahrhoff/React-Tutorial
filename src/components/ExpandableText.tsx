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
        className="d-inline-block text-truncate"
        style={{
          maxWidth: open ? "none" : "50px",
          overflow: "hidden",
          whiteSpace: "nowrap",
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
