import axios from 'axios';
import type { TeamMember, MarketRate } from '../types';
import type { 
  LoginRequest, 
  RegistrationRequest,
  User as AuthUser 
} from '../types/auth.types';

// Local interface to avoid import issues
interface AuthResponse {
  success: boolean;
  message: string;
  user?: AuthUser;
  token?: string;
  refreshToken?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const teamApi = {
  getAll: () => api.get<TeamMember[]>('/team'),
  getById: (id: string) => api.get<TeamMember>(`/team/${id}`),
  create: (data: Partial<TeamMember>) => api.post<TeamMember>('/team', data),
  update: (id: string, data: Partial<TeamMember>) => api.put<TeamMember>(`/team/${id}`, data),
  delete: (id: string) => api.delete(`/team/${id}`),
};

export const marketRateApi = {
  getAll: () => api.get<MarketRate[]>('/market-rates'),
  update: (id: string, data: Partial<MarketRate>) => api.put<MarketRate>(`/market-rates/${id}`, data),
};

export const authApi = {
  // Authentication endpoints
  login: (credentials: LoginRequest) => 
    api.post<AuthResponse>('/auth/login', credentials),
  register: (userData: RegistrationRequest) => 
    api.post<AuthResponse>('/auth/register', userData),
  refresh: (refreshToken: string) => 
    api.post<AuthResponse>('/auth/refresh', { refreshToken }),
  logout: () => 
    api.post<AuthResponse>('/auth/logout'),
    
  // Profile endpoints
  getProfile: () => 
    api.get<{ success: boolean; user: AuthUser }>('/auth/profile'),
  updateProfile: (profileData: Partial<AuthUser['personalInfo']>) => 
    api.put<AuthResponse>('/auth/profile', profileData),
  changePassword: (passwordData: { currentPassword: string; newPassword: string; confirmPassword: string }) => 
    api.post<AuthResponse>('/auth/change-password', passwordData),
    
  // Password reset endpoints
  forgotPassword: (email: string) => 
    api.post<AuthResponse>('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) => 
    api.post<AuthResponse>(`/auth/reset-password/${token}`, { password }),
    
  // Email verification
  verifyEmail: (token: string) => 
    api.get<AuthResponse>(`/auth/verify-email/${token}`),
    
  // Health check
  healthCheck: () => 
    api.get<{ success: boolean; message: string; timestamp: string }>('/auth/health'),
};

export default api;