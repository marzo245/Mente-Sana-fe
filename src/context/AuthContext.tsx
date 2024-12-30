import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'psychologist';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'user' | 'psychologist') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    // For demo purposes, we'll simulate a successful login
    setUser({
      id: '1',
      name: 'Usuario Demo',
      email: email,
      role: 'user'
    });
  };

  const register = async (name: string, email: string, password: string, role: 'user' | 'psychologist') => {
    // Implement actual registration logic here
    // For demo purposes, we'll simulate a successful registration
    setUser({
      id: '1',
      name: name,
      email: email,
      role: role
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}