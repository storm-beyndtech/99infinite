import React, { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import RegistrationFlow from '../../components/auth/registration/RegistrationFlow';
import PageLoader from '../../components/PageLoader';

const ReferralRegister: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { user, fetching } = useAuth();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [isValidReferral, setIsValidReferral] = useState<boolean | null>(null);

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setReferralCode(ref);
      // Validate referral code by checking if the user exists
      validateReferralCode(ref);
    } else {
      // No referral code, redirect to home
      setIsValidReferral(false);
    }
  }, [searchParams]);

  const validateReferralCode = async (code: string) => {
    try {
      const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
      const response = await fetch(`${url}/auth/validate-referral/${code}`);
      
      if (response.ok) {
        setIsValidReferral(true);
      } else {
        setIsValidReferral(false);
      }
    } catch (error) {
      console.error('Error validating referral code:', error);
      setIsValidReferral(false);
    }
  };

  // Show loading while checking auth and referral
  if (fetching || isValidReferral === null) {
    return <PageLoader />;
  }

  // Redirect authenticated users to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Redirect if no valid referral code
  if (!isValidReferral) {
    return <Navigate to="/" replace />;
  }

  // Pass referral code to registration flow
  return <RegistrationFlow referralCode={referralCode} />;
};

export default ReferralRegister;