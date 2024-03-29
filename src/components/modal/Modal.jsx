const Modale = ({ closeModal }) => {
  return (
    <>
      (
      <div className="modal-container">
        <div className="modal-wrapper">
          <p className="modale-desc">Your succefuly add a worker</p>
          <div className="btn-wrapper">
            <button className="close-btn" onClick={() => closeModal()}>
              Back
            </button>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Modale;
