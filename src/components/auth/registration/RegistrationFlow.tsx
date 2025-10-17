import React from 'react';
import { RegistrationProvider, useRegistration } from '../../../contexts/RegistrationContext';
import Step2PersonalData from './Step2PersonalData';
import Step3Investment from './Step3Investment';
import Step4Overview from './Step4Overview';
import Step5KYC from './Step5KYC';

const RegistrationSteps: React.FC = () => {
  const { state } = useRegistration();

  const renderStep = () => {
    switch (state.step) {
      case 2:
        return <Step2PersonalData />;
      case 3:
        return <Step3Investment />;
      case 4:
        return <Step4Overview />;
      case 5:
        return <Step5KYC />;
      default:
        return <Step2PersonalData />;
    }
  };

  return <>{renderStep()}</>;
};

const RegistrationFlow: React.FC = () => {
  return (
    <RegistrationProvider>
      <RegistrationSteps />
    </RegistrationProvider>
  );
};

export default RegistrationFlow;