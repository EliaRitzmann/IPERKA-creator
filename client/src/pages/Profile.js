import { async } from '@firebase/util'
import { updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export const Profile = () => {
    const {user} = useAuth()

    const [username, setUsername] = useState(user.displayName)
    const [email, setEmail] = useState(user.email)

    const updateDisplayName = async() => {
        await updateProfile(user, {
            displayName: username
        })
        //reload application
        window.location.reload(false);
    }

    const cancle = () => {
        setUsername(user.displayName)
        setEmail(user.email)
    }

  return (
    <div className="modal" id="profile">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Dein Profil</h3>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Benutzername:</span>

  </label>
  <input type="text" placeholder="Benutzername" className="input input-bordered w-full" maxLength={30} value={username} onChange={(e)=> setUsername(e.target.value)}/>
 
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Email:</span>

  </label>
  <input type="text" placeholder="Email" className="input input-bordered w-full " value={email} onChange={(e)=> setEmail(e.target.value)} disabled/>
 
</div>
    
    <div className='flex justify-end gap-2'>
    <div className="modal-action">
     <a className="btn" href={"#"} onClick={cancle} >Abbrechen</a>
    </div>
    <div className="modal-action">
     <a className="btn" onClick={updateDisplayName} href={"#"}>Speichern</a>
    </div>
    </div>
    
  </div>
</div>
  )
}
