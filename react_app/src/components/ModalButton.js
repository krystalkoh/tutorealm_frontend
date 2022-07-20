import React from "react";

const ModalButton = (props) => {
  return (
    <button type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ModalButton;
