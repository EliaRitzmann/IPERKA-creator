import React, { useEffect, useState } from 'react'
import { TextAreaInput } from '../../form/TextAreaInput'
import { TextInput } from '../../form/TextInput'

export const Aufgabenstellung = ({document}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">Aufgabenstellung:</h2>
        <TextAreaInput document={document} name="taskDescription" label1="Aufgabenstellung:" placeholder="Aufgabenstellung"></TextAreaInput>
        <TextInput document={document} name="task" label1="Auftrag:" value={document.task} placeholder="LA1234"></TextInput>
      </div>
    </div>
  )
}
