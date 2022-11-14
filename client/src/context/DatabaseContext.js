import { createContext, useContext, useEffect, useState } from "react";

//Firebase Auth
import { useAuth } from "./AuthContext";

//Firestore
import {
  collection, query, where,
  onSnapshot,
  addDoc
} from 'firebase/firestore';

import { firestore } from "../config/firebase";




//Create Context
const databaseContext = createContext();

export function useDatabase(){
    return useContext(databaseContext);
}

export const DatabaseContextProvider = ({children}) => {
    const { user } = useAuth()
    console.log(user)
    const [documents, setDocuments] = useState([])
    
    //category
    const documentsRef = query(collection(firestore, "documents"), where("userId", "==", user.uid))

    useEffect(() =>
    onSnapshot(documentsRef, (snapshot) => {
      setDocuments([])
      setDocuments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log("documents read")
    }
    ),
    []);

    const addDocument = async (name, description) => {
        console.log(name)
        await addDoc(collection(firestore, "documents"), {
            userId: user.uid,
            documentName: name,
            documentDescription: description,
            owner: user.displayName
        })
        console.log("document created")
    }

    const value = {
        documents,
        addDocument
    }


  return (
    <databaseContext.Provider value={value}>     
            {children}
        </databaseContext.Provider>
  )
}