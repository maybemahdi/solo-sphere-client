import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import { auth } from "../Firebase/firebase.config";
  
  export const AuthContext = createContext(null);
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, [update]);
    const logOut = () => {
      return signOut(auth);
    };
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
    };
    const githubLogin = () => {
      return signInWithPopup(auth, githubProvider);
    };
    const userInfo = {
      setLoading,
      setUpdate,
      update,
      user,
      createUser,
      signIn,
      logOut,
      loading,
      googleLogin,
      githubLogin,
    };
    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;