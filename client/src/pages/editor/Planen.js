import React from 'react'
import { Checklist } from '../../components/editor/planen/Checklist'
import { GanttChart } from '../../components/editor/planen/GanttChart'

export const Planen = ({document}) => {
  return (
    <div className=' m-3 gap-2 flex flex-col'>
      <h1 className='text-2xl font-semibold'>Planen</h1>

      <div>
        <GanttChart document={document}></GanttChart>
      </div>
    </div>
  )
}
