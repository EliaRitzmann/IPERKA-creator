import { createContext, useContext, useEffect, useState } from "react";

//Firebase Auth
import { useAuth } from "./AuthContext";

//Firestore
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

import { firestore } from "../config/firebase";

//Create Context
const databaseContext = createContext();

export function useDatabase() {
  return useContext(databaseContext);
}

export const DatabaseContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [contributor, setContributor] = useState([]);

  //document
  const documentsRef = query(
    collection(firestore, "documents"),
    where("userId", "==", user.uid)
  );

  const contributorRef = query(
    collection(firestore, "documents"),
    where("contributor", "array-contains", user.email)
  );

  useEffect(
    () =>
      onSnapshot(documentsRef, (snapshot) => {
        setDocuments([]);
        setDocuments(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log("documents read");
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(contributorRef, (snapshot) => {
        setContributor([]);
        setContributor(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log("contributor read");
      }),
    []
  );

  const addDocument = async (name, description) => {
    console.log(name);
    await addDoc(collection(firestore, "documents"), {
      userId: user.uid,
      documentName: name,
      documentDescription: description,
    });
    console.log("document created");
  };

  const value = {
    documents,
    contributor,
    addDocument,
  };

  return (
    <databaseContext.Provider value={value}>
      {children}
    </databaseContext.Provider>
  );
};
