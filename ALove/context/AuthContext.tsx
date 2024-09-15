import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Here you would check user authentication status (e.g., from AsyncStorage or an API)
  useEffect(() => {
    // Simulate checking authentication status from storage or an API
    const checkAuthStatus = async () => {
      const token = await getUserToken(); // Simulate token retrieval
      setIsSignedIn(!!token);
    };
    checkAuthStatus();
  }, []);

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Example async function to get user token (replace with actual implementation)
const getUserToken = async () => {
  return null; // Return null or a token from AsyncStorage or secure storage
};