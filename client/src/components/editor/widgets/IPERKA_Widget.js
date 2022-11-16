import React from "react";

export const IPERKA_Widget = () => {
  return (
    <div className="card bg-base-100 shadow-xl xl:col-span-2 w-full">
      <div className="card-body">
      <h2 className="card-title">Fortschritt:</h2>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Informieren</li>
          <li className="step step-primary">Planen</li>
          <li className="step">Entscheiden</li>
          <li className="step">Realisieren</li>
          <li className="step">Kontrollieren</li>
          <li className="step">Auswerten</li>
        </ul>
        <div className="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Sie liegen gut im Plan.</span>
  </div>
</div>
      </div>
    </div>
  );
};
