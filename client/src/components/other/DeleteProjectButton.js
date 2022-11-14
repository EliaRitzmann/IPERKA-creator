import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { firestore } from '../../config/firebase'

export const DeleteProjectButton = (props) => {
    const {navigate} = useNavigate()
    const deleteProject = async () => {
        await deleteDoc(doc(firestore, "documents", props.document.id))
        await navigate("/")
    }
  return (
    <button className="btn btn-outline btn-error" onClick={() => deleteProject()}>Projekt löschen</button>
  )
}
