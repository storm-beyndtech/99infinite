import axios from 'axios';
import type { BlogPost, TeamMember, Financing, Podcast, MarketRate } from '../types';

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
    const token = localStorage.getItem('token');
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
      localStorage.removeItem('token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// API functions
export const blogApi = {
  getAll: (params?: { page?: number; category?: string; search?: string }) => 
    api.get<{ posts: BlogPost[]; total: number; pages: number }>('/blog', { params }),
  getBySlug: (slug: string) => api.get<BlogPost>(`/blog/${slug}`),
  create: (data: Partial<BlogPost>) => api.post<BlogPost>('/blog', data),
  update: (id: string, data: Partial<BlogPost>) => api.put<BlogPost>(`/blog/${id}`, data),
  delete: (id: string) => api.delete(`/blog/${id}`),
};

export const teamApi = {
  getAll: () => api.get<TeamMember[]>('/team'),
  getById: (id: string) => api.get<TeamMember>(`/team/${id}`),
  create: (data: Partial<TeamMember>) => api.post<TeamMember>('/team', data),
  update: (id: string, data: Partial<TeamMember>) => api.put<TeamMember>(`/team/${id}`, data),
  delete: (id: string) => api.delete(`/team/${id}`),
};

export const financingApi = {
  getAll: (params?: { page?: number; type?: string; featured?: boolean }) => 
    api.get<{ financings: Financing[]; total: number; pages: number }>('/financings', { params }),
  getBySlug: (slug: string) => api.get<Financing>(`/financings/${slug}`),
  create: (data: Partial<Financing>) => api.post<Financing>('/financings', data),
  update: (id: string, data: Partial<Financing>) => api.put<Financing>(`/financings/${id}`, data),
  delete: (id: string) => api.delete(`/financings/${id}`),
};

export const podcastApi = {
  getAll: (params?: { page?: number }) => 
    api.get<{ podcasts: Podcast[]; total: number; pages: number }>('/podcasts', { params }),
  getBySlug: (slug: string) => api.get<Podcast>(`/podcasts/${slug}`),
  create: (data: Partial<Podcast>) => api.post<Podcast>('/podcasts', data),
  update: (id: string, data: Partial<Podcast>) => api.put<Podcast>(`/podcasts/${id}`, data),
  delete: (id: string) => api.delete(`/podcasts/${id}`),
};

export const marketRateApi = {
  getAll: () => api.get<MarketRate[]>('/market-rates'),
  update: (id: string, data: Partial<MarketRate>) => api.put<MarketRate>(`/market-rates/${id}`, data),
};

interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export const authApi = {
  login: (credentials: { email: string; password: string }) => 
    api.post<{ token: string; user: User }>('/auth/login', credentials),
  register: (userData: { email: string; password: string; name: string }) => 
    api.post<{ token: string; user: User }>('/auth/register', userData),
  getProfile: () => api.get<User>('/auth/profile'),
};

export default api;