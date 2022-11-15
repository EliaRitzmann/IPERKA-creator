import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { firestore } from "../../config/firebase";

export const DateInput = (props) => {
    const [value, setValue] = useState("");

    const saveDoc = async () => {
        var timestamp = new Date(value)
        console.log(timestamp)
        await updateDoc(doc(firestore, "documents", props.document.id), {
            [props.name]: timestamp,
          });
    };

    useEffect(() => {
        //console.log(props.value)
       
        if(props.value){
            //var date = await toDateTime(props.value)
            setValue(props.value.toDate().toISOString().split('T')[0])
        }else{
          setValue(new Date())
        }
      }, [props])

  return (
    <div className="form-control w-full -mt-2">
      <label className="label">
        <span className="label-text">{props.label1}</span>
        <span className="label-text-alt">{props.label2}</span>
      </label>
      <input
        type="date"
        value={value}
        onChange={(e => setValue(e.target.value))}
        onBlur={saveDoc}
        //placeholder={props.placeholder}
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text-alt">{props.label3}</span>
        <span className="label-text-alt">{props.label4}</span>
      </label>
    </div>
  )
}
