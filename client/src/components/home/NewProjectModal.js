import React, { useState } from "react";
import { useDatabase } from "../../context/DatabaseContext";

export const NewProjectModal = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const {addDocument} = useDatabase()

  const createDocument = () => {
    if(name != "" && description != ""){
      addDocument(name, description)
      clearFields()
    }
  }

  const clearFields = () => {
      setName("")
      setDescription("")
  }

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="card-actions justify-between">
          <h3 className="font-bold text-lg">IPERKA Dokument erstellen</h3>
          <div className="modal-action">
          <label className="btn btn-square btn-sm" htmlFor="NewProjectModal" onClick={() => clearFields()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          </div>
          
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input type="text" placeholder="dein Projekt" className="input input-bordered w-full input-md" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium">Beschreibung</span>
          </label>
          <textarea className="textarea textarea-bordered resize-none" placeholder="Beschreibung" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="modal-action">
          <label htmlFor="NewProjectModal" className="btn" onClick={() => createDocument()}>
            erstellen
          </label>
        </div>
      </div>
    </div>
  );
};
