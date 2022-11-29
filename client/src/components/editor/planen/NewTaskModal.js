import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../../../config/firebase";

export const NewTaskModal = ({ document }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();

  const createtask = async () => {
    if(name != "" && description != "" && startDate != "" && dueDate != ""){
        await addDoc(collection(firestore, "tasks"), {
            documentId: document.id,
            name: name,
            description: description,
            startDate: new Date(startDate),
            dueDate: new Date(dueDate),
          });
          clearFields();
    }
  };

  const clearFields = () => {
    setName("");
    setDescription("");
    setStartDate();
    setDueDate();
  };

  return (
    <div>
      <input type="checkbox" id="newTaksModal" class="modal-toggle" />
      <div class="modal">
        <div className="modal-box relative">
          <label
            htmlFor="newTaksModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={clearFields}
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
            <label htmlFor="newTaksModal" className="btn" onClick={createtask}>
              Hinzufügen
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const triggerNewTaskModal = () => {
  //stackoverflow.com/questions/71778425/how-can-i-control-daisyui-tailwind-modal-open-as-default
  https: document.getElementById("newTaksModal").checked = true;
};
