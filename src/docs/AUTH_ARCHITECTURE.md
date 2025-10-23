# Authentication Architecture

## Overview
This application uses a high-level authentication check system that ensures user availability is handled at the route level, eliminating the need for null checks in individual components.

## Architecture Components

### 1. Route-Level Protection
- **App.tsx** - All routes are wrapped with appropriate layout wrappers
- **DashboardLayoutWrapper** - Protects dashboard routes, ensures user exists
- **AdminLayoutWrapper** - Protects admin routes, ensures user exists and is admin

### 2. Layout System
- **DashboardLayout** - Receives guaranteed non-null user prop
- **AdminLayout** - Receives guaranteed non-null admin user prop
- **Headers/Sidebars** - Receive user as prop, no null checks needed

### 3. Context System
- **AuthContext** - Original context with nullable user for auth flow
- **SafeAuthContext** - Guaranteed non-null user context for protected components

## Usage Patterns

### Dashboard Components
```tsx
import { useSafeAuth } from "../../contexts/SafeAuthContext";

const MyDashboardComponent = () => {
  const { user } = useSafeAuth(); // user is guaranteed to exist
  
  // No need for user?.property checks
  return <div>Welcome {user.firstName}</div>;
};
```

### Admin Components
```tsx
import { useSafeAuth } from "../../contexts/SafeAuthContext";

const MyAdminComponent = () => {
  const { user } = useSafeAuth(); // user is guaranteed to exist and be admin
  
  // No need for role checks or null checks
  return <div>Admin: {user.email}</div>;
};
```

## Route Structure

### Public Routes
- Wrapped in `<Layout />` - no user required
- `/`, `/about`, `/contact`, etc.

### Dashboard Routes
- Wrapped in `<DashboardLayoutWrapper />` - user guaranteed
- `/dashboard`, `/dashboard/profile`, `/dashboard/investments`, etc.

### Admin Routes  
- Wrapped in `<AdminLayoutWrapper />` - admin user guaranteed
- `/admin`, `/admin/users`, `/admin/settings`, etc.

### Auth Routes
- No wrapper - accessible to all
- `/login`, `/register`, `/auth/success`

## Benefits

1. **No Null Checks** - Components inside layouts never need to check if user exists
2. **Type Safety** - User is guaranteed to be non-null in protected components
3. **Clean Code** - No defensive programming needed in business logic
4. **Centralized Auth** - All authentication logic handled at route level
5. **Role Enforcement** - Admin routes automatically check admin role

## Migration Guide

### Before (with null checks)
```tsx
const { user } = useAuth();

if (!user) return <div>Loading...</div>;

return <div>Welcome {user?.firstName || 'User'}</div>;
```

### After (guaranteed user)
```tsx
const { user } = useSafeAuth();

return <div>Welcome {user.firstName || 'User'}</div>;
```