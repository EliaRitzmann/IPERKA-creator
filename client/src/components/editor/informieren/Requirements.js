import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../config/firebase";

export const Requirements = ({ document }) => {
    const [tests, setTests] = useState([])
    const testsRef = query(collection(firestore, "tests"), where("documentId", "==", document.id))

    useEffect(() =>
    onSnapshot(testsRef, (snapshot) => {
      setTests([])
      setTests(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        
    }
    ),
    []);

    const elements = []

    for (let index = 0; index < tests.length; index++) {
      elements.push(<TableRow test={tests[index]} number={index + 1} key={index + tests[index].text + tests[index].type}></TableRow>)
  }


  return (
    <div className="card w-full bg-base-100 shadow-xl col-span-2 xl:row-span-3 xl:col-span-2">
      <div className="card-body">
        <h2 className="card-title">Anforderunganalyse:</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Nr.</th>
                <th className="w-60">Typ</th>
                <th>Anforderung</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {elements}
              <NewRow document={document} number={elements.length + 1}></NewRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({test, number}) => {
    const [type, setType] = useState(test.type)
    const [text, setText] = useState(test.text)

    const updateTest = async () => {
        await updateDoc(doc(firestore, "tests", test.id), {
            documentId: test.documentId,
            type: type,
            text: text
        })
    }

    const updateDropdown = (text) => {
        setType(text)
        updateTest()
    }

    const deleteTest = async () => {
        await deleteDoc(doc(firestore, "tests", test.id))
    }

  return (
    <tr>
      <th>{number}</th>
      <th>
        <div className="dropdown dropdown-right dropdown-end w-full">
          <label tabIndex={0} className="btn m-1 btn-outline w-full">
            {type}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => updateDropdown("Funktional")}>Funktional</a>
            </li>
            <li>
              <a onClick={() => updateDropdown("Randbedingung")}>Randbedingung</a>
            </li>
            <li>
              <a onClick={() => updateDropdown("Qualitativ")}>Qualitativ</a>
            </li>
          </ul>
        </div>
      </th>
      <th className="">
        <input
          type="text"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          onBlur={updateTest}
          placeholder="Type here"
          className="input w-full max-w-md"
        />
        
      </th>
      <th>
      <button className="btn" onClick={deleteTest}>del</button>
      </th>
    </tr>
  );
};

const NewRow = ({document, number}) => {
    const [type, setType] = useState("Funktional")
    const [text, setText] = useState("")

    const addTest = async () => {
        await addDoc(collection(firestore, "tests"), {
            documentId: document.id,
            type: type,
            text: text
        })
        setType("Funktional")
        setText("")
    }


  return (
    <tr>
      <th>{number}</th>
      <th>
        <div className="dropdown dropdown-right dropdown-end w-full">
          <label tabIndex={0} className="btn m-1 btn-outline w-full">
            {type}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => setType("funktional")}>Funktional</a>
            </li>
            <li>
              <a onClick={() => setType("Randbedingung")}>Randbedingung</a>
            </li>
            <li>
              <a onClick={() => setType("Qualitativ")}>Qualitativ</a>
            </li>
          </ul>
        </div>
      </th>
      <th className="">
        <input
          type="text"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          placeholder="Type here"
          className="input w-full max-w-md"
        />
        
      </th>
      <th>
      <button className="btn" onClick={addTest}>add</button>
      </th>
    </tr>
  );
};
