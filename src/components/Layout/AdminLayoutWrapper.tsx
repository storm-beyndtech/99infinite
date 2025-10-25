import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import AdminLayout from './AdminLayout/AdminLayout';

// This wrapper ensures user is never null and is admin in AdminLayout and its children
const AdminLayoutWrapper: React.FC = () => {
  const { user, fetching } = useAuth();

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

  return (
      <AdminLayout>
        <Outlet />
      </AdminLayout>
  );
};

export default AdminLayoutWrapper;