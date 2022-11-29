import { async } from "@firebase/util";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../config/firebase";

export const TaskModal = ({ selectedTask }) => {
  const [name, setName] = useState();
  const [documentId, setDocumentId] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();

  const deleteTask = async () => {
    await deleteDoc(doc(firestore, "tasks", selectedTask));
  };

  const updateTask = async () => {
    if (name != "" && description != "" && startDate != "" && dueDate != "") {
      await setDoc(doc(firestore, "tasks", selectedTask), {
        documentId: documentId,
        name: name,
        description: description,
        startDate: new Date(startDate),
        dueDate: new Date(dueDate),
      });
    }
  };

  useEffect(() => {
    getData();
  }, [selectedTask]);

  const getData = async () => {
    const docRef = doc(firestore, "tasks", selectedTask);
    const docSnap = await getDoc(docRef);
    const data = await docSnap.data();
    console.log(data);
    setDocumentId(data.documentId);
    setName(data.name);
    setDescription(data.description);
    setStartDate(data.startDate.toDate().toISOString().split("T")[0]);
    setDueDate(data.dueDate.toDate().toISOString().split("T")[0]);
  };

  return (
    <div>
      <input type="checkbox" id="TaksModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="TaksModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Neuen Task erstellen</h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Beschreibung:</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Beschreibung"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control w-full -mt-2">
            <label className="label">
              <span className="label-text">Start:</span>
            </label>
            <input
              type="date"
              //placeholder={props.placeholder}
              className="input input-bordered w-full"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-control w-full -mt-2">
            <label className="label">
              <span className="label-text">Ende:</span>
            </label>
            <input
              type="date"
              //placeholder={props.placeholder}
              className="input input-bordered w-full"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="TaksModal"
              className="btn btn-outline btn-error"
              onClick={deleteTask}
            >
              Löschen
            </label>
            <label htmlFor="TaksModal" className="btn" onClick={updateTask}>
              Sichern
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const triggerTaskModal = () => {
  //stackoverflow.com/questions/71778425/how-can-i-control-daisyui-tailwind-modal-open-as-default
  https: document.getElementById("TaksModal").checked = true;
};
