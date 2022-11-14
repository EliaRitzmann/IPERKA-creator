import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = (props) => {
    const navigate = useNavigate()
  return (
    <button className="card w-96 h-44 bg-base-100 shadow-xl hover:shadow-2xl" onClick={() => navigate("/editor/" + props.documentId)}>
  <div className="card-body">
    <h2 className="card-title">{props.documentName}</h2>
    <p>{props.documentDescription}</p>
  </div>
</button>
  )
}
