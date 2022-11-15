import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { firestore } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";

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
  return (
    <button
      className="btn btn-outline btn-error"
      onClick={() => leaveProject()}
    >
      Projekt verlassen
    </button>
  );
};
