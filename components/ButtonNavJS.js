import React from "react";

const ButtonNavJS = ({ text, onClick }) => {
  return (
    <button className="btn-navbar" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonNavJS;
