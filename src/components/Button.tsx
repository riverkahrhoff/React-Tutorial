import { useState } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button className="btn btn-success" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
