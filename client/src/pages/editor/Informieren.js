import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { Aufgabenstellung } from '../../components/editor/informieren/Aufgabenstellung'
import { Requirements } from '../../components/editor/informieren/Requirements'
import { TeamsWidget } from '../../components/editor/widgets/TeamsWidget'
import { firestore } from "../../config/firebase";

export const Informieren = ({document}) => {
  const [tests, setTests] = useState([])

    const testsRef = query(collection(firestore, "tests"), where("documentId", "==", document.id))

    useEffect(() =>
    onSnapshot(testsRef, (snapshot) => {
      setTests([])
      setTests(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log("tests read")
    }
    ),
    []);


  return (
    <div className='h-5/6 m-3 gap-2 flex flex-col'>
      <h1 className='text-2xl font-semibold'>Informieren</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-4 ">
        <Aufgabenstellung document={document}></Aufgabenstellung>
        <Requirements document={document} tests={tests}></Requirements>
        <TeamsWidget document={document}></TeamsWidget>
      </div>
    </div>
  )
}
