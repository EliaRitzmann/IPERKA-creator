import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewProjectModal } from './NewProjectModal'

export const NewProjectCard = () => {
    const navigate = useNavigate()
    return (
      <label className="card w-96 h-44 bg-base-100 shadow-lg hover:shadow-2xl" htmlFor="NewProjectModal">
    <div className="flex justify-center items-center w-full h-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    </div>
  </label>
    )
}
