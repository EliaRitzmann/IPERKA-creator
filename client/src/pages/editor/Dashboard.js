import React, { useState } from "react";
import { DaysLeftWidget } from "../../components/editor/widgets/DaysLeftWidget";
import { IPERKA_Widget } from "../../components/editor/widgets/IPERKA_Widget";
import { NotesWidget } from "../../components/editor/widgets/NotesWidget";
import { SettingsWidget } from "../../components/editor/widgets/SettingsWidget";
import { TeamsWidget } from "../../components/editor/widgets/TeamsWidget";
import { WelcomeWidget } from "../../components/editor/widgets/WelcomeWidget";

export const Dashboard = ({document}) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="m-3 gap-2 flex flex-col">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      {showAlert && (
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>warnung: Sie benutzen eine Alpha Version</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost" onClick={() => setShowAlert(false)}>delete</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-4">
        <WelcomeWidget></WelcomeWidget>
        <IPERKA_Widget></IPERKA_Widget>
        <DaysLeftWidget document={document}></DaysLeftWidget>
        <TeamsWidget></TeamsWidget>
        <SettingsWidget document={document}></SettingsWidget>
        <NotesWidget document={document}></NotesWidget>
      </div>
    </div>
  );
};
