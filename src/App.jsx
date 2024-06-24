import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/register/RegistrationForm";
import PersonalInformationForm from "./components/PersonalInformationForm";
import { useState } from "react";
import AddAddressForm from "./components/AddAddressForm";
import AddAddressSearch from "./components/AddAddressSearch";
import SuccessModal from "./components/SuccessModal";
import LoginForm from "./pages/login/LoginForm.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <BrowserRouter>
      <div className={!Routes ? "container" : undefined}>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <div className={currentStep !== 5 && "form"}>
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
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                  />
                )}
                {currentStep === 4 && (
                  <AddAddressForm
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                  />
                )}
                {currentStep === 5 && (
                  <SuccessModal handlePreviousStep={handlePreviousStep} />
                )}
              </div>
            }
          />

          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
