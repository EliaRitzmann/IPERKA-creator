import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../../config/firebase'
import { ConfirmModal, triggerConformModal } from './ConfirmModal'

export const DeleteProjectButton = (props) => {
    const deleteProject = async () => {
        await deleteDoc(doc(firestore, "documents", props.document.id))
        
    }
  return (<div>
    <ConfirmModal name="deleteProjectModal" confirm={deleteProject} title="Projekt löschen?" text={"Wollen Sie das Projekt " + props.document.documentName + " wirklich löschen?"}></ConfirmModal>
    <button className="btn btn-outline btn-error" onClick={() => triggerConformModal("deleteProjectModal")}>Projekt löschen</button>
  </div>
    
  )
}
