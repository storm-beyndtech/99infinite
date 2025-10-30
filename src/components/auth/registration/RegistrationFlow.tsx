import React from 'react';
import { RegistrationProvider, useRegistration } from '../../../contexts/RegistrationContext';
import Step1PersonalData from './Step1PersonalData';
import Step2Privacy from './Step2Privacy';

const RegistrationSteps: React.FC = () => {
  const { state } = useRegistration();

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Step1PersonalData />;
      case 2:
        return <Step2Privacy />;
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