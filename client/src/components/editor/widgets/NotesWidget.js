import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../config/firebase";

export const NotesWidget = (props) => {
  const [value, setValue] = useState(props.document.notes);

  const saveDoc = async () => {
    await updateDoc(doc(firestore, "documents", props.document.id), {
      notes: value,
    });
  };

  useEffect(() => {
    setValue(props.document.notes)
  }, [props])
  

  return (
    <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Notizen:</h2>
    <textarea className="textarea textarea-ghost resize-none h-full" placeholder="Notizen" value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={saveDoc}
        ></textarea>
  </div>
</div>
  )
}
