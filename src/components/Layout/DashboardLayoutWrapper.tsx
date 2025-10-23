import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import SafeAuthContext from '../../contexts/SafeAuthContext';

interface DashboardLayoutWrapperProps {
  children: React.ReactNode;
}

// This wrapper ensures user is never null in DashboardLayout and its children
const DashboardLayoutWrapper: React.FC<DashboardLayoutWrapperProps> = ({ children }) => {
  const { user, fetching, logout, updateUser } = useAuth();

  // Loading state
  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User exists - provide safe auth context and pass to DashboardLayout
  const safeAuthValue = {
    user, // Guaranteed to exist
    logout,
    updateUser,
  };

  return (
    <SafeAuthContext.Provider value={safeAuthValue}>
      <DashboardLayout>{children}</DashboardLayout>
    </SafeAuthContext.Provider>
  );
};

export default DashboardLayoutWrapper;