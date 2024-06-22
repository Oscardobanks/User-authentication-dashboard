import PropTypes from "prop-types";
import "./SuccessModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import modalImage from "../assets/onwards.png";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ handlePreviousStep }) => {
  SuccessModal.propTypes = {
    handlePreviousStep: PropTypes.func.isRequired,
  };

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="success-modal">
      <div className="modal-content">
        <button className="close-button text-xl" onClick={handlePreviousStep}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <img
          src={modalImage}
          alt="Success Illustration"
          className="modal-image"
        />
        <div className="p-10">
          <div className="modal-text">
            <p>You are successfully registered!</p>
          </div>
          <button type="submit" className="create-account-button" onClick={handleGoToLogin}>
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
