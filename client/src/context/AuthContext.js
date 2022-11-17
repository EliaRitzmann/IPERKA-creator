import { createContext, useContext, useEffect, useState } from "react";

//Firebase connection
import { auth, firestore } from "../config/firebase";

//Firebase functions
import {
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
    signInWithRedirect(auth, githubLogin);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      await setUser(currentUser);

      //update user information to database
      await setDoc(doc(firestore, "publicUsers", currentUser.uid), {
        email: currentUser.email,
        displayName: currentUser.displayName
      });
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
