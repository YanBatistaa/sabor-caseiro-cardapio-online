
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  checkAuthStatus: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const adminSession = sessionStorage.getItem('lanchonete-admin-session');
      if (adminSession === 'authenticated') {
        setIsAdmin(true);
        console.log('Admin session found');
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    }
  };

  const login = (password: string): boolean => {
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      setIsAdmin(true);
      try {
        sessionStorage.setItem('lanchonete-admin-session', 'authenticated');
        console.log('Admin login successful');
      } catch (error) {
        console.error('Error saving admin session:', error);
      }
      return true;
    } else {
      console.log('Invalid admin password');
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem('lanchonete-admin-session');
      console.log('Admin logged out');
    } catch (error) {
      console.error('Error removing admin session:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      isAdmin,
      login,
      logout,
      checkAuthStatus
    }}>
      {children}
    </AuthContext.Provider>
  );
};
