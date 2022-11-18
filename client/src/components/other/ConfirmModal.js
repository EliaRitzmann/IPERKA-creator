import React from 'react'

export const ConfirmModal = ({name, title, text, confirm}) => {
  return (
    <div>
        <input type="checkbox" id={name} className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{text}</p>
    <div className="modal-action">
      <label htmlFor={name} className="btn">Nein</label>
      <label htmlFor={name} className="btn" onClick={confirm}>Ja</label>
    </div>
  </div>
</div>
    </div>
  )
}

export const triggerConformModal = (name) =>{
    https://stackoverflow.com/questions/71778425/how-can-i-control-daisyui-tailwind-modal-open-as-default
    document.getElementById(name).checked = true;
}
