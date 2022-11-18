import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { firestore } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";
import { ConfirmModal, triggerConformModal } from "./ConfirmModal";

export const LeaveProjectButton = ({document}) => {
    const {user} = useAuth()

  const leaveProject = async () => {
    var oldContributor = [];
    if (document.contributor) {
      oldContributor = document.contributor;
    }

    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    const index = oldContributor.indexOf(user.email);
    if (index > -1) {
      // only splice array when item is found
      oldContributor.splice(index, 1); // 2nd parameter means remove one item only
    }

    await updateDoc(doc(firestore, "documents", document.id), {
      contributor: oldContributor,
    });

  };
  return (<div>
    <ConfirmModal name="leaveProjectModal" title="Projekt verlassen?" text={"Möchten Sie das Projekt " + document.documentName + " wirklich verlassen?"} confirm={leaveProject}></ConfirmModal>
<button
      className="btn btn-outline btn-error"
      onClick={() => triggerConformModal("leaveProjectModal")}
    >
      Projekt verlassen
    </button>
  </div>
    
  );
};
