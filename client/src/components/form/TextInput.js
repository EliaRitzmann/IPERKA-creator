import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../../config/firebase";

export const TextInput = (props) => {
  const [value, setValue] = useState(props.value);

  const saveDoc = async () => {
    await updateDoc(doc(firestore, "documents", props.document.id), {
      [props.name]: value,
    });
  };

  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">{props.label1}</span>
        <span className="label-text-alt">{props.label2}</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={(e => setValue(e.target.value))}
        onBlur={saveDoc}
        placeholder={props.label1}
        className="input input-bordered w-full "
      />
      <label className="label">
        <span className="label-text-alt">{props.label3}</span>
        <span className="label-text-alt">{props.label4}</span>
      </label>
    </div>
  );
};
