import { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { KYCData, PersonalInfo, Portfolio, RegistrationFormState, ValidationErrors } from '../types/auth.types';

// Registration Actions
type RegistrationAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<PersonalInfo> }
  | { type: 'UPDATE_PORTFOLIO'; payload: Partial<Portfolio> }
  | { type: 'UPDATE_KYC'; payload: Partial<KYCData> }
  | { type: 'UPDATE_PASSWORD'; payload: { password?: string; confirmPassword?: string } }
  | { type: 'SET_STEP_VALIDITY'; payload: { step: keyof RegistrationFormState['isValid']; isValid: boolean } }
  | { type: 'RESET_FORM' }
  | { type: 'SET_ERRORS'; payload: ValidationErrors }
  | { type: 'CLEAR_ERRORS' };

// Initial State
const initialState: RegistrationFormState = {
  step: 1,
  personalInfo: {
    username: '',
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zipCode: '',
    location: '',
    state: '',
    country: '',
    birthday: {
      day: 1,
      month: 1,
      year: new Date().getFullYear() - 18,
    },
    mobileNumber: {
      countryCode: '+1',
      number: '',
    },
  },
  portfolio: {
    products: [],
    tempSum: 0,
    finalSum: 0,
    minimumOrderAmount: 100,
  },
  kyc: {
    buyingForSelf: true,
    politicallyExposed: false,
    termsAndConditions: false,
    privacyStatement: false,
    paymentMethod: 'bank_transfer',
  },
  password: '',
  confirmPassword: '',
  isValid: {
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  },
  errors: null
};

// Registration Reducer
function registrationReducer(state: RegistrationFormState, action: RegistrationAction): RegistrationFormState {
  switch (action.type) {
    case 'SET_STEP':
      return {
        ...state,
        step: action.payload,
      };
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };
    case 'UPDATE_PORTFOLIO':
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          ...action.payload,
        },
      };
    case 'UPDATE_KYC':
      return {
        ...state,
        kyc: {
          ...state.kyc,
          ...action.payload,
        },
      };
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: action.payload.password || state.password,
        confirmPassword: action.payload.confirmPassword || state.confirmPassword,
      };
    case 'SET_STEP_VALIDITY':
      return {
        ...state,
        isValid: {
          ...state.isValid,
          [action.payload.step]: action.payload.isValid,
        },
      };
    case 'RESET_FORM':
      return initialState;
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.payload,
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: undefined,
      };
    default:
      return state;
  }
}

// Registration Context Interface
interface RegistrationContextType {
  state: RegistrationFormState;
  setStep: (step: number) => void;
  updatePersonalInfo: (data: Partial<PersonalInfo>) => void;
  updatePortfolio: (data: Partial<Portfolio>) => void;
  updateKYC: (data: Partial<KYCData>) => void;
  updatePassword: (password?: string, confirmPassword?: string) => void;
  setStepValidity: (step: keyof RegistrationFormState['isValid'], isValid: boolean) => void;
  resetForm: () => void;
  setErrors: (errors: ValidationErrors) => void;
  clearErrors: () => void;
  nextStep: () => void;
  prevStep: () => void;
  canProceed: (step: number) => boolean;
  getRegistrationData: () => any;
}

// Create Context
const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

// Registration Provider Component
interface RegistrationProviderProps {
  children: ReactNode;
}

export function RegistrationProvider({ children }: RegistrationProviderProps) {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  // Action creators with useCallback to prevent infinite loops
  const setStep = useCallback((step: number) => {
    dispatch({ type: 'SET_STEP', payload: step });
  }, []);

  const updatePersonalInfo = useCallback((data: Partial<PersonalInfo>) => {
    dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: data });
  }, []);

  const updatePortfolio = useCallback((data: Partial<Portfolio>) => {
    dispatch({ type: 'UPDATE_PORTFOLIO', payload: data });
  }, []);

  const updateKYC = useCallback((data: Partial<KYCData>) => {
    dispatch({ type: 'UPDATE_KYC', payload: data });
  }, []);

  const updatePassword = useCallback((password?: string, confirmPassword?: string) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: { password, confirmPassword } });
  }, []);

  const setStepValidity = useCallback((step: keyof RegistrationFormState['isValid'], isValid: boolean) => {
    dispatch({ type: 'SET_STEP_VALIDITY', payload: { step, isValid } });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({ type: 'RESET_FORM' });
  }, []);

  const setErrors = useCallback((errors: ValidationErrors) => {
    dispatch({ type: 'SET_ERRORS', payload: errors });
  }, []);

  const clearErrors = useCallback(() => {
    dispatch({ type: 'CLEAR_ERRORS' });
  }, []);

  // Navigation helpers
  const nextStep = useCallback(() => {
    if (state.step < 4) {
      setStep(state.step + 1);
    }
  }, [state.step, setStep]);

  const prevStep = useCallback(() => {
    if (state.step > 1) {
      setStep(state.step - 1);
    }
  }, [state.step, setStep]);

  // Validation helper
  const canProceed = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return state.isValid.step1;
      case 2:
        return state.isValid.step2;
      case 3:
        return state.isValid.step3;
      case 4:
        return state.isValid.step4;
      default:
        return false;
    }
  }, [state.isValid]);

  // Get complete registration data
  const getRegistrationData = useCallback(() => {
    return {
      personalInfo: state.personalInfo,
      portfolio: state.portfolio,
      kyc: state.kyc,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };
  }, [state.personalInfo, state.portfolio, state.kyc, state.password, state.confirmPassword]);

  const contextValue: RegistrationContextType = {
    state,
    setStep,
    updatePersonalInfo,
    updatePortfolio,
    updateKYC,
    updatePassword,
    setStepValidity,
    resetForm,
    setErrors,
    clearErrors,
    nextStep,
    prevStep,
    canProceed,
    getRegistrationData,
  };

  return (
    <RegistrationContext.Provider value={contextValue}>
      {children}
    </RegistrationContext.Provider>
  );
}

// Custom hook to use registration context
export function useRegistration(): RegistrationContextType {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
}

export default RegistrationContext;