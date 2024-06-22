import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import React Router components
import { useFormikContext } from "formik";
import RegistrationForm from "./pages/register/RegistrationForm";
import PersonalInformationForm from "./components/PersonalInformationForm";
import { useState } from "react";
import AddAddressForm from "./components/AddAddressForm";
import AddAddressSearch from "./components/AddAddressSearch";
import SuccessModal from "./components/SuccessModal";
import LoginForm from './pages/login/LoginForm.jsx';
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const formikContext = useFormikContext();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setFormData({ ...formData, ...formikContext.values });
    console.log("Form details: ", formikContext.values);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div className={currentStep !== 4 && "form"}>
              {currentStep === 1 && (
                <RegistrationForm handleNextStep={handleNextStep} />
              )}
              {currentStep === 2 && (
                <PersonalInformationForm
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              )}
              {currentStep === 3 && (
                <AddAddressSearch
                  handleNextStep={setCurrentStep(currentStep + 1)}
                  handlePreviousStep={handlePreviousStep}
                />
              )}
              {currentStep === 4 && (
                <AddAddressForm
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              )}
            </div>
          } />
          {currentStep === 5 && (
            <SuccessModal
              handlePreviousStep={handlePreviousStep}
            />
          )}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;