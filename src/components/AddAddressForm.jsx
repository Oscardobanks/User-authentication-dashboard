import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './AddAddressForm.css';

const AddAddressForm = ({handleNextStep, handlePreviousStep}) => {
  AddAddressForm.propTypes = {
    handleNextStep: PropTypes.object.isRequired,
    handlePreviousStep: PropTypes.func.isRequired,
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string()
      .required('Street address is required'),
    city: Yup.string()
      .required('City is required'),
    state: Yup.string()
      .required('State is required'),
    zipCode: Yup.string()
      .required('Zip code is required')
      .matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code'),
  });

  return (
    <div className="add-address-form">
      <div className="header pb-10">
      <div className="flex gap-5 items-center font-bold">
          <p className="text-xl pb-1">Add address</p>
          <span>3 of 3</span>
        </div>
        <button
          className="close-button text-xl"
          onClick={handlePreviousStep}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="form-body">
        <Formik
          initialValues={{
            streetAddress: '',
            apartment: '',
            city: '',
            state: '',
            zipCode: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="streetAddress">Street address</label>
                <Field type="text" id="streetAddress" name="streetAddress" />
                <ErrorMessage name="streetAddress" component="div" className="error-message" placeholder="Street Address" />
              </div>
              <div className="form-group">
                <label htmlFor="apartament">Apartament</label>
                <Field type="text" id="apartament" name="apartament" placeholder="Apartament" />
                <span className="Optional">Optional</span>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" placeholder="City" />
                <ErrorMessage name="city" component="div" className="error-message" />
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <Field type="text" id="state" name="state" placeholder="State" />
                  <ErrorMessage name="state" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Zip code</label>
                  <Field type="text" id="zipCode" name="zipCode" placeholder="Zip Code" />
                  <ErrorMessage name="zipCode" component="div" className="error-message" />
                </div>
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
    </div>
  );
};

export default AddAddressForm;