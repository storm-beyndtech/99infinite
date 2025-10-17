import React from 'react';
import { AuthProvider } from '../../contexts/AuthContext';
import RegistrationFlow from '../../components/auth/registration/RegistrationFlow';

const Register: React.FC = () => {
  return (
    <AuthProvider>
      <RegistrationFlow />
    </AuthProvider>
  );
};

export default Register;