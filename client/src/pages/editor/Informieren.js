
import React from "react";

import { Aufgabenstellung } from '../../components/editor/informieren/Aufgabenstellung'
import { Requirements } from '../../components/editor/widgets/Requirements'
import { TeamsWidget } from '../../components/editor/widgets/TeamsWidget'

export const Informieren = ({document}) => {

  return (
    <div className=' m-3 gap-2 flex flex-col'>
      <h1 className='text-2xl font-semibold'>Informieren</h1>

      <div className="grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 md:gap-4 gap-2 grid-flow-row-dense">
        <Aufgabenstellung document={document} ></Aufgabenstellung>
        <Requirements document={document}></Requirements>
        <TeamsWidget document={document}></TeamsWidget>
      </div>
    </div>
  )
}
