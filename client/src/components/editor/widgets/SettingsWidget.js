import { doc } from 'firebase/firestore'
import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { DateInput } from '../../form/DateInput'
import { TextAreaInput } from '../../form/TextAreaInput'
import { TextInput } from '../../form/TextInput'
import { DeleteProjectButton } from '../../other/DeleteProjectButton'
import { LeaveProjectButton } from '../../other/LeaveProjectButton'

export const SettingsWidget = ({document}) => {
  const {user} = useAuth()
  return (
    <div className="card w-full bg-base-100 shadow-xl row-span-2">
      <div className="card-body">
        <h2 className="card-title">Projekt:</h2>
        <TextInput document={document} name="documentName" label1="Name:" placeholder="Name"></TextInput>
        <TextAreaInput document={document} name="documentDescription" label1="Beschreibung:"  placeholder="Beschreibung"></TextAreaInput>
        <DateInput document={document} name="dueDate" label1="Abgabedatum:" label2="(Immer bis 23:59 Uhr)" placeholder="dd/mm/jjjj"></DateInput>
        {user.uid == document.userId ? <DeleteProjectButton document={document}></DeleteProjectButton> : <LeaveProjectButton document={document}></LeaveProjectButton>}
        
      </div>
    </div>
  )
}
