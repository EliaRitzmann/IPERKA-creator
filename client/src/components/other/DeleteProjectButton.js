import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../../config/firebase'

export const DeleteProjectButton = (props) => {
    const deleteProject = async () => {
        await deleteDoc(doc(firestore, "documents", props.document.id))
    }
  return (
    <button className="btn btn-outline btn-error" onClick={() => deleteProject()}>Projekt löschen</button>
  )
}
