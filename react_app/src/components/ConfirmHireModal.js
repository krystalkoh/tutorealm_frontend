import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalButton from "./ModalButton";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <ModalButton onClick={props.onClick}>Hire</ModalButton>
        </footer>
      </div>
    </div>
  );
};
const ConfirmHireModal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <>
        {ReactDOM.createPortal(
          <OverLay
            title={props.title}
            message={props.message}
            onClick={props.onClick}
          />,
          document.querySelector("#modal-root")
        )}
      </>
    );
  }

  
};

export default ConfirmHireModal;
