import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { firestore } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";

export const TeamMember = ({ email, document }) => {
  const { user } = useAuth();

  const deleteMember = async () => {
    var oldContributor = [];
    if (document.contributor) {
      oldContributor = document.contributor;
    }

    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    const index = oldContributor.indexOf(email);
    if (index > -1) {
      // only splice array when item is found
      oldContributor.splice(index, 1); // 2nd parameter means remove one item only
    }

    await updateDoc(doc(firestore, "documents", document.id), {
      contributor: oldContributor,
    });
  };

  return (
    <div className="alert shadow-lg flex-row">
      <div className="w-2/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="stroke-violet-800 flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        <span className="truncate md:w-full">{email}</span>
      </div>
      <div className="flex-none md:hidden">
        {user.uid === document.userId && (
          <button className="btn btn-sm" onClick={deleteMember}>
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
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex-none hidden md:block">
        {user.uid === document.userId && (
          <button className="btn btn-sm" onClick={deleteMember}>
            remove
          </button>
        )}
      </div>
    </div>
  );
};
