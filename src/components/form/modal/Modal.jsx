import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * Modale component
 * Renders a modal with a success message and a close button.
 * @param {function} closeModal - The function to close the modal.
 * @returns {JSX.Element} - The modal component.
 */

const Modale = ({ closeModal }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
          <p className="modale-desc">You have successfully added a worker</p>
          <div className="button-wrapper">
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
