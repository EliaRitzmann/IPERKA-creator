import React from 'react'
import { Aufgabenstellung } from '../../components/editor/informieren/Aufgabenstellung'
import { Requirements } from '../../components/editor/informieren/Requirements'
import { TeamsWidget } from '../../components/editor/widgets/TeamsWidget'

export const Informieren = ({document}) => {
  return (
    <div className='h-5/6 m-3 gap-2 flex flex-col'>
      <h1 className='text-2xl font-semibold'>Informieren</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-4 ">
        <Aufgabenstellung document={document}></Aufgabenstellung>
        <Requirements document={document}></Requirements>
        <TeamsWidget document={document}></TeamsWidget>
      </div>
    </div>
  )
}
