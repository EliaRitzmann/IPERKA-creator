import React, { useEffect, useState } from 'react'

export const DayField = ({day, currentDate}) => {
    const today = new Date()
  return (
    <div className="flex flex-col justify-center items-center h-14 bg-amber-700">
        <h1 className='md:text-xl md:font-bold'>{day?.date.getDate() + "." + (day?.date.getMonth() + 1) + "."}</h1>
        <h2 className='text-sm hidden md:block'>{day?.weekday}</h2>
    </div>
  )
}
