import { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { PersonalInfo, RegistrationFormState, ValidationErrors, PrivacySettings } from '../types/auth.types';

// Registration Actions
type RegistrationAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<PersonalInfo> }
  | { type: 'UPDATE_PASSWORD'; payload: { password?: string; confirmPassword?: string } }
  | { type: 'UPDATE_PRIVACY'; payload: Partial<PrivacySettings> }
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
  password: '',
  confirmPassword: '',
  privacy: {
    termsAndConditions: false,
    privacyStatement: false,
  },
  isValid: {
    step1: false,
    step2: false,
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
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: action.payload.password || state.password,
        confirmPassword: action.payload.confirmPassword || state.confirmPassword,
      };
    case 'UPDATE_PRIVACY':
      return {
        ...state,
        privacy: {
          ...state.privacy,
          ...action.payload,
        },
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
  updatePassword: (password?: string, confirmPassword?: string) => void;
  updatePrivacy: (data: Partial<PrivacySettings>) => void;
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


  const updatePassword = useCallback((password?: string, confirmPassword?: string) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: { password, confirmPassword } });
  }, []);

  const updatePrivacy = useCallback((data: Partial<PrivacySettings>) => {
    dispatch({ type: 'UPDATE_PRIVACY', payload: data });
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
    if (state.step < 2) {
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
      default:
        return false;
    }
  }, [state.isValid]);

  // Get complete registration data
  const getRegistrationData = useCallback(() => {
    return {
      personalInfo: state.personalInfo,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };
  }, [state.personalInfo, state.password, state.confirmPassword]);

  const contextValue: RegistrationContextType = {
    state,
    setStep,
    updatePersonalInfo,
    updatePassword,
    updatePrivacy,
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