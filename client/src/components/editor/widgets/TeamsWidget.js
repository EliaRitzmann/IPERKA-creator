import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../../../config/firebase";
import { useAuth } from "../../../context/AuthContext";
import { TeamMember } from "../../other/TeamMember";

export const TeamsWidget = ({ document }) => {
  const { user } = useAuth();
  const [contributor, setContributor] = useState("");

  const addMember = async () => {
    var oldContributor = [];
    var bad = false;
    if (document.contributor) {
      oldContributor = document.contributor;
    }
    console.log(oldContributor);

    for (let index = 0; index < oldContributor.length; index++) {
      if (contributor == oldContributor[index]) {
       bad = true;
      }
    }

    if (contributor != "" && !bad) {
      bad = false;
      await oldContributor.push(contributor);

      await updateDoc(doc(firestore, "documents", document.id), {
        contributor: oldContributor,
      });
      await setContributor("")
    }

    
  };

  var elements = [];

  if (document.contributor) {
    for (let index = 0; index < document.contributor.length; index++) {
      elements.push(<TeamMember document={document} email={document.contributor[index]} key={index}></TeamMember>)
    }
  }

  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){
      addMember()
    }
 }

  return (
    <div className="card w-full bg-base-100 shadow-xl col-span-2 xl:col-span-1 xl:row-span-2">
      <div className="card-body ">
        <div className="flex flex-col justify-between h-full ">
          <div>
            <h2 className="card-title mb-5">Team:</h2>
            <div className="alert shadow-lg -mb-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="stroke-info flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <span className="flex items-center gap-1">{document.owner} <span className="text-gray-500 text-xs justify-end">(owner)</span></span>
              </div>
            </div>
            <div className="divider">Mitglieder</div>
            <div className="flex flex-col gap-3 max-h-60 w-full overflow">
            {elements}
            </div>
            
          </div>
          {user.uid === document.userId && <div className="w-full ">
            <div className="flex gap-2 mt-2 w-full justify-center">
              <input
                type="email"
                value={contributor}
                onChange={(e) => setContributor(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                placeholder="email"
                className="input input-bordered w-full max-w-xs invalid:border-red-600 focus:valid:border-green-600 "
              />
              <div
                className="tooltip tooltip-left"
                data-tip="Mitglied hinzufügen"
              >
                <button className="btn btn-square" onClick={addMember}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>}
          
        </div>
      </div>
    </div>
  );
};
