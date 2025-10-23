import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminLayout from './AdminLayout/AdminLayout';
import SafeAuthContext from '../../contexts/SafeAuthContext';

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
}

// This wrapper ensures user is never null and is admin in AdminLayout and its children
const AdminLayoutWrapper: React.FC<AdminLayoutWrapperProps> = ({ children }) => {
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

  // Not admin
  if (user.role !== 'admin' && !user.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  // User exists and is admin - provide safe auth context and pass to AdminLayout
  const safeAuthValue = {
    user, // Guaranteed to exist and be admin
    logout,
    updateUser,
  };

  return (
    <SafeAuthContext.Provider value={safeAuthValue}>
      <AdminLayout>{children}</AdminLayout>
    </SafeAuthContext.Provider>
  );
};

export default AdminLayoutWrapper;