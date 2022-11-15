import React from 'react'
import { useAuth } from '../../../context/AuthContext';

export const WelcomeWidget = () => {
    const { user} = useAuth();
  return (
    <div className="card bg-base-100 shadow-xl image-full w-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">Willkommen {user.displayName}</h2>
    <p>Was steht heute an?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">hilfe</button>
    </div>
  </div>
</div>
  )
}
