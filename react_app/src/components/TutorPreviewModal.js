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
          <ol>
            <li>{props.name}</li>
            <li>{props.gender}</li>
            <li>{props.edulevel}</li>
          </ol>
        </div>
        <footer className={styles.actions}>
          <ModalButton onClick={props.onClick}>Close</ModalButton>
        </footer>
      </div>
    </div>
  );
};

const TutorPreviewModal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <>
        {ReactDOM.createPortal(
          <OverLay
            title={props.title}
            name={props.name}
            gender={props.gender}
            edulevel={props.edulevel}
            onClick={props.onClose}
          />,
          document.querySelector("#modal-root")
        )}
      </>
    );
  }
  
};

export default TutorPreviewModal;
