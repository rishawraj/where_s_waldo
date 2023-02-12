import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail as updateEmailFirebase,
  updatePassword as updatePasswordFirebase,
} from "firebase/auth";

interface AuthContextValue {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

const MyContext = React.createContext<AuthContextValue | null>(null);

export function useAuth() {
  return useContext(MyContext);
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateEmail = (email: string) => {
    if (currentUser) return updateEmailFirebase(currentUser, email);
    return Promise.reject(new Error("User not found"));
  };

  const updatePassword = (password: string) => {
    if (currentUser) return updatePasswordFirebase(currentUser, password);
    return Promise.reject(new Error("User not found"));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <MyContext.Provider value={value}>
      {!loading && children}
    </MyContext.Provider>
  );
};
