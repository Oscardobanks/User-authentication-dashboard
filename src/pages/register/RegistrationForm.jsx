import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faClose,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import googleLogo from "../../assets/search.svg";
import PropTypes from 'prop-types'

import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({handleNextStep}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  RegistrationForm.propTypes = {
    handleNextStep: PropTypes.object.isRequired,
  };

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <div className="">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission logic here
          console.log("Form values:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <div>
                <div className="header">
              <div className="auth-buttons">
                <button className="register-button pb-3">Register</button>
                <button className="log-in-button pb-3" onClick={handleGoToLogin}>Log in</button>
              </div>
              <button className="close-button pb-3 text-xl">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="social-register">
              <button className="social-button apple">
                <FontAwesomeIcon icon={faApple} className="social-icons" />
              </button>
              <button className="social-button facebook">
                <FontAwesomeIcon icon={faFacebookF} className="social-icons" />
              </button>
              <button className="social-button google">
                <img src={googleLogo} alt="" className="social-icons" />
              </button>
            </div>
            <p className="or-text">or register with email</p>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
              {touched.email && !errors.email && (
                <span className="email-check-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </div>
            <div className="form-group pb-2">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                />
                <div className="password-icons">
                  {touched.password && !errors.password && (
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  )}
                  <button type="button" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
              <p className="password-info">8+ characters</p>
            </div>
            <button
              type="submit"
              className="create-account-button"
              disabled={isSubmitting}
              onClick={handleNextStep}
            >
              Create account
            </button>
            <div className="checkbox-group">
              <Field type="checkbox" name="newsletter" id="newsletter" />
              <label htmlFor="newsletter">Send me news and promotions</label>
            </div>
            <p className="terms-and-conditions">
              By continuing I agree with the <a href="#">Terms & Conditions</a>,
              <br />
              <a href="#">Privacy Policy</a>
            </p>
              </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
