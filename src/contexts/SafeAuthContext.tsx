import { createContext, useContext } from "react";
import type { User } from "../types";

// Safe Auth Context for components where user is guaranteed to exist
interface SafeAuthContextType {
  user: User; // Never null - guaranteed by layout wrappers
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
}

const SafeAuthContext = createContext<SafeAuthContextType | undefined>(undefined);

// Hook for components where user is guaranteed to exist (used within layout wrappers)
export function useSafeAuth(): SafeAuthContextType {
  const context = useContext(SafeAuthContext);
  if (!context) {
    throw new Error("useSafeAuth must be used within a layout wrapper that provides SafeAuthContext");
  }
  return context;
}

export default SafeAuthContext;