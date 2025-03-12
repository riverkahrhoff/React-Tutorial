import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <FaHeart size="40" color="#ff6b81" onClick={toggle} />
  ) : (
    <FaRegHeart size="40" color="#ff6b81" onClick={toggle} />
  );
};

export default Like;
