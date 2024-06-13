import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Modale = ({ closeModal }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <FontAwesomeIcon icon={faCircleCheck} />
          <p className="modale-desc">You have successfully added a worker</p>
          <div className="btn-wrapper">
            <button className="close-btn" onClick={() => closeModal()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modale;