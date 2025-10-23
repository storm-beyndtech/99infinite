import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("");
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const setUserData = (userData: any) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const login = async (email: string, password: string) => {
    try {
      setFetching(true);
      setError(null);
      
      const res = await fetch(`${url}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      
      if (res.ok && data.user) {
        setUserData(data.user);
        return true;
      } else {
        setError(data.message || 'Login failed');
        return false;
      }
    } catch (error: any) {
      setError(error.message || 'Login failed');
      return false;
    } finally {
      setFetching(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  const fetchUser = async (userId: string) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(`${url}/api/users/profile/${userId}`, {
        signal: controller.signal,
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.error('Fetch error:', error.message);
    } finally {
      clearTimeout(timeoutId);
      setFetching(false);
    }
  };

  const updateUser = (userData: any) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  useEffect(() => {
    setFetching(true);
    const storageData = localStorage.getItem('user');

    if (storageData) {
      try {
        const user = JSON.parse(storageData);
        if (user && user._id) {
          fetchUser(user._id);
        } else {
          setUser(null);
          setFetching(false);
        }
      } catch (error) {
        console.error('Parse error:', error);
        setUser(null);
        setFetching(false);
      }
    } else {
      setUser(null);
      setFetching(false);
    }
  }, []);


  // Provide both new and old interfaces for compatibility
  const state = {
    user,
    isLoading: fetching,
    isAuthenticated: !!user,
    error
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      fetching, 
      fetchUser, 
      login, 
      logout, 
      setTheme, 
      theme,
      updateUser,
      clearError,
      error,
      state // For components expecting the old interface
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export const useAuth = useAuthContext;
export const contextData = useAuthContext;
