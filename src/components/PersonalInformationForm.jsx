import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./PersonalInformationForm.css";

const PersonalInformationForm = ({ handleNextStep, handlePreviousStep }) => {
  const handleSave = (values) => {
    handleNextStep(values);
  };

  PersonalInformationForm.propTypes = {
    handleNextStep: PropTypes.object.isRequired,
    handlePreviousStep: PropTypes.func.isRequired,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    gender: Yup.string().required("Please select a gender"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]+$/, "Invalid phone number")
      .required("Required"),
    birthday: Yup.date(), // You can add more validation for birthday if needed
  });

  return (
    <div className="personal-information-form">
      <div className="header mb-10">
        <div className="flex gap-5 items-center font-bold">
          <p className="text-xl pb-1">Personal information</p>
          <span>2 of 3</span>
        </div>
        <button
          className="close-button text-xl"
          onClick={handlePreviousStep}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          gender: "Male",
          phoneNumber: "",
          birthday: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <div className="form-group">
              <Field
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
              {touched.fullName && !errors.fullName && (
                <span className="check-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </div>
            <div className="form-group flex gap-4 items-center">
              <label htmlFor="gender">Gender:</label>
              <div className="flex gap-1">
                <Field type="radio" name="gender" value="Male" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-1">
                <Field type="radio" name="gender" value="Female" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="flex gap-1 items-center pb-5">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="bg-black text-white rounded-full border-2 border-black"
              />
              <span className="text-xs font-bold">
                The phone number and birthday are only visible to you
              </span>
            </div>
            <div className="form-group flex gap-2">
              <div className="phone-prefix">
                <Field type="number" name="phonePrefix" placeholder="+598" />
              </div>
              <Field
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error-message"
              />
              {touched.phoneNumber && !errors.phoneNumber && (
                <span className="check-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </div>
            <div className="form-group mb-10">
              <Field
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Birthday"
              />
              <ErrorMessage
                name="birthday"
                component="div"
                className="error-message"
              />
              <span className="optional">Optional</span>
            <p className="birthday-info">
              Let us know about your birthday so as not to miss a gift
            </p>
            </div>
            <button
              type="submit"
              className="create-account-button"
              disabled={isSubmitting}
              onClick={handleNextStep}
            >
              Save information
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformationForm;
