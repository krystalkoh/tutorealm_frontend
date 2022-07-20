import React from "react";
import ReactDOM from "react-dom";
import styles from "./ConfirmationModal.module.css";

const Overlay = (props) => {
  console.log(props.parentid);
  return (
    <div className={styles.backdrop} onClick={props.onClick} id={props._id}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
          <h2>{props.parentid}</h2>
        </header>
        <div className={styles.content}></div>
        <p>{props.message}</p>
        <button handleClick={() => {}}>Confirm</button>
        <br />
        <button onClick={props.onClick}> Back to homepage</button>
      </div>
    </div>
  );
};

const ConfirmationModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          parentid={props.parentid}
          onClick={props.onClick}
          handleClick={props.handleClick}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ConfirmationModal;
