import React, { useState } from "react";
import { NewProjectCard } from "../../components/home/NewProjectCard";
import { NewProjectModal } from "../../components/home/NewProjectModal";
import { ProjectCard } from "../../components/home/ProjectCard";
import { useDatabase } from "../../context/DatabaseContext";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  const { documents } = useDatabase();
  console.log(documents);

  const elements = [];

  for (let i = 0; i < documents.length; i++) {
    elements.push(
      <ProjectCard
        documentName={documents[i].documentName}
        documentDescription={documents[i].documentDescription}
        documentId={documents[i].id}
        key={i}
      ></ProjectCard>
    );
  }

  return (
    <div className="p-5">
      <div>
        <h1 className="mb-2 font-bold text-slate-700">
          Deine Projekte ({documents.length}/3)
        </h1>
        <div className="flex gap-4">
          {elements}
          {documents.length < 3 && <NewProjectCard></NewProjectCard>}
        </div>
      </div>
      <br />
      <br />
      {/*Mitglieder funktiion einbauen*/}
      <div>
        <h1 className="mb-2 font-bold text-slate-700">
          Projekte bei denen du mitarbeitest
        </h1>
        <div className="flex gap-4">
          {elements}
        </div>
      </div>
      <input type="checkbox" id="NewProjectModal" className="modal-toggle" />

      {/*create Project Modal*/}
      <NewProjectModal setShowModal={setShowModal}></NewProjectModal>
    </div>
  );
};
