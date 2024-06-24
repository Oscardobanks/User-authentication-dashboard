import PropTypes from "prop-types";
import "./SuccessModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import modalImage from "../assets/onwards.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react";

const SuccessModal = ({ handlePreviousStep }) => {
  SuccessModal.propTypes = {
    handlePreviousStep: PropTypes.func.isRequired,
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoToLogin = () => {
    setIsLoading(true);
    toast.success("User Registered Successfully!!");
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="success-modal">
      <ToastContainer />
      <div className="modal-content">
        <button className="close-button text-xl" onClick={handlePreviousStep}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <img
          src={modalImage}
          alt="Success Illustration"
          className="modal-image"
        /> 
        <div className="sm:px-10 px-8 py-5">
          <div className="modal-text">
            <p className="text-3xl">You are successfully registered!</p>
          </div>
          <button type="submit" className="create-account-button" disabled={ isLoading} onClick={handleGoToLogin}>
          {isLoading ? 'Registering....' : 'Go to Login' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
