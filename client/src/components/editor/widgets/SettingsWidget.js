import { doc } from 'firebase/firestore'
import React from 'react'
import { DateInput } from '../../form/DateInput'
import { TextAreaInput } from '../../form/TextAreaInput'
import { TextInput } from '../../form/TextInput'
import { DeleteProjectButton } from '../../other/DeleteProjectButton'

export const SettingsWidget = ({document}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl row-span-2">
      <div className="card-body">
        <h2 className="card-title">Projekt:</h2>
        <TextInput document={document} name="documentName" label1="Name:" value={document.documentName} placeholder="Name"></TextInput>
        <TextAreaInput document={document} name="documentDescription" label1="Beschreibung:" value={document.documentDescription} placeholder="Beschreibung"></TextAreaInput>
        <DateInput document={document} name="dueDate" label1="Abgabedatum:" value={document.dueDate} placeholder="dd/mm/jjjj"></DateInput>
        <DeleteProjectButton document={document}></DeleteProjectButton>
      </div>
    </div>
  )
}
