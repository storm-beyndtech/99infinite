import React from 'react';
import { RegistrationProvider, useRegistration } from '../../../contexts/RegistrationContext';
import Step1PersonalData from './Step1PersonalData';
import Step2Investment from './Step2Investment';
import Step3Overview from './Step3Overview';
import Step4KYC from './Step4Privacy';

const RegistrationSteps: React.FC = () => {
  const { state } = useRegistration();

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Step1PersonalData />;
      case 2:
        return <Step2Investment />;
      case 3:
        return <Step3Overview />;
      case 4:
        return <Step4KYC />;
      default:
        return <Step1PersonalData />;
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