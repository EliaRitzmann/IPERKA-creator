import React, { useState } from "react";
import { useParams } from "react-router";

//componnents
import { Sidebar } from "../../components/editor/sidebar/Sidebar";
import { useDatabase } from "../../context/DatabaseContext";
import { Auswerten } from "./Auswerten";
import { Dashboard } from "./Dashboard";
import { Entscheiden } from "./Entscheiden";
import { Informieren } from "./Informieren";
import { Kontrollieren } from "./Kontrollieren";

import { Planen } from "./Planen";
import { Realisieren } from "./Realisieren";

export const Editor = () => {
  let { id } = useParams();
  const { documents, contributor } = useDatabase();

  const document = documents.find((doc) => doc.id == id)

  const documentb = contributor.find((doc) => doc.id == id)

  const [currentPage, setCurrentPage] = useState("Dashboard");

  //check if document exists and if editor can load stuff
  if(document){
    return (
      <div className="h-screen flex">
        <Sidebar setCurrentPage={setCurrentPage}></Sidebar>
  
        <div className="bg-gray-200 w-full rounded-l-3xl ml-20 overflow-auto">
          {currentPage === "Dashboard" && <Dashboard document={document}></Dashboard>}
          {currentPage === "Informieren" && <Informieren document={document}></Informieren>}
          {currentPage === "Planen" && <Planen document={document}></Planen>}
          {currentPage === "Entscheiden" && <Entscheiden document={document}></Entscheiden>}
          {currentPage === "Realisieren" && <Realisieren document={document}></Realisieren>}
          {currentPage === "Kontrollieren" && <Kontrollieren document={document}></Kontrollieren>}
          {currentPage ==="Auswerten" && <Auswerten document={document}></Auswerten>}
        </div>
      </div>
    );
  }else if(contributor){
    return (
      <div className="h-screen flex">
        <Sidebar setCurrentPage={setCurrentPage}></Sidebar>
  
        <div className="bg-gray-200 w-full rounded-l-3xl ml-20 overflow-auto">
          {currentPage === "Dashboard" && <Dashboard document={document}></Dashboard>}
          {currentPage === "Informieren" && <Informieren document={document}></Informieren>}
          {currentPage === "Planen" && <Planen document={document}></Planen>}
          {currentPage === "Entscheiden" && <Entscheiden document={document}></Entscheiden>}
          {currentPage === "Realisieren" && <Realisieren document={document}></Realisieren>}
          {currentPage === "Kontrollieren" && <Kontrollieren document={document}></Kontrollieren>}
          {currentPage ==="Auswerten" && <Auswerten document={document}></Auswerten>}
        </div>
      </div>
    );
  }
  else{
    return(
      <div>
          <h1>no document found under id: {id}</h1>
          <a href="/">back</a>
      </div>
    )
  }
  
};
