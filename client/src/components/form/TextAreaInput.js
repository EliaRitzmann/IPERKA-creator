import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { firestore } from "../../config/firebase";

export const TextAreaInput = (props) => {
  const [value, setValue] = useState("");

  const saveDoc = async () => {
    await updateDoc(doc(firestore, "documents", props.document.id), {
      [props.name]: value,
    });
  };

  useEffect(() => {
    if(props.value){
      setValue(props.value)
    }else{
      setValue("")
    }
  }, [])

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{props.label1}</span>
        <span className="label-text-alt">{props.label2}</span>
      </label>
      <textarea
        className="textarea textarea-bordered resize-none" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={saveDoc}
        placeholder={props.label1}
      ></textarea>
      <label className="label">
        <span className="label-text-alt">{props.label3}</span>
        <span className="label-text-alt">{props.label4}</span>
      </label>
    </div>
  );
};
