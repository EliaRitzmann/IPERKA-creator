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
  console.log(user);
  const [documents, setDocuments] = useState([]);
  const [contributor, setContributor] = useState([]);
  const [publicUsers, setPublicUsers] = useState([]);

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

  //publicUsers

  //https://firebase.google.com/docs/firestore/query-data/get-data?hl=de&authuser=0
  const publicUsersRef = collection(firestore, "publicUsers");

  useEffect(
    () =>
      onSnapshot(publicUsersRef, (snapshot) => {
        setPublicUsers([]);
        setPublicUsers(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log("publicUsers read");
      }),
    []
  );

  const addDocument = async (name, description) => {
    console.log(name);
    await addDoc(collection(firestore, "documents"), {
      userId: user.uid,
      documentName: name,
      documentDescription: description,
      owner: user.displayName,
    });
    console.log("document created");
  };

  const value = {
    documents,
    contributor,
    publicUsers,
    addDocument,
  };

  return (
    <databaseContext.Provider value={value}>
      {children}
    </databaseContext.Provider>
  );
};
