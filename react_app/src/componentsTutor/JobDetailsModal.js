import React from "react";
import ReactDOM from "react-dom";
import styles from "./JobDetailsModal.module.css"

// const [data, setData] = useState("");

// const jobId = props.jobId;
// console.log(jobId);

// const fetchPost = async () => {
//   try {
//     const response = await fetch(`url`);
//     const jobData = await response.json();

//     setData(jobData);
//   } catch (error) {
//     console.log("error.message");
//   }
// };

// useEffect(() => {
//   console.log(`show info`);
//   fetchPost();
// }, [jobId]);

const Overlay = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.board} ${styles.modal} ${styles.backdrop}`}
      id={props._id}
    >
      {/* <h2>{props.title}</h2> */}
      <h4>{props.childName}</h4>
      <h4>{props.level}</h4>
      <h4>{props.subject}</h4>
      <h4>{props.duration}</h4>
      <h4>{props.frequency}</h4>
      <h4>{props.days}</h4>
      <h4>{props.rate}</h4>
      <h4>{props.availability}</h4>
      <button onClick={props.onClick}>Close</button>
    </div>
  );
};
const JobDetailsModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          id={props._id}
          childName={props.childName}
          level={props.level}
          // subject={props.subject}
          duration={props.duration}
          frequency={props.frequency}
          days={props.days}
          rate={props.rate}
          availability={props.availability}
          onClick={props.onClick}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};
export default JobDetailsModal;
