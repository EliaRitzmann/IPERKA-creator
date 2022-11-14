import { createContext, useContext, useEffect, useState } from "react";

//Firebase connection
import { auth } from "../config/firebase";

//Firebase functions
import {
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  GithubAuthProvider,
} from "firebase/auth";


//Create Context
const userAuthContext = createContext();

//Provider
const githubLogin = new GithubAuthProvider();

export function useAuth() {
  return useContext(userAuthContext);
}

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function login() {
    return signInWithRedirect(auth, githubLogin);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    logOut,
    login,
  };

  return (
    <userAuthContext.Provider value={value}>
      {!loading && children}
    </userAuthContext.Provider>
  );
}
