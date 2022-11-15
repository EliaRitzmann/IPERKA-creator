import React from "react";
import { Alerts } from "../../components/editor/dashboard/Alerts";
import { DaysLeftWidget } from "../../components/editor/widgets/DaysLeftWidget";
import { IPERKA_Widget } from "../../components/editor/widgets/IPERKA_Widget";
import { NotesWidget } from "../../components/editor/widgets/NotesWidget";
import { SettingsWidget } from "../../components/editor/widgets/SettingsWidget";
import { TeamsWidget } from "../../components/editor/widgets/TeamsWidget";
import { WelcomeWidget } from "../../components/editor/widgets/WelcomeWidget";

export const Dashboard = ({document}) => {
  return (
    <div className="m-3 gap-2 flex flex-col">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <Alerts></Alerts>

      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-4">
        <WelcomeWidget></WelcomeWidget>
        <IPERKA_Widget></IPERKA_Widget>
        <DaysLeftWidget document={document}></DaysLeftWidget>
        <TeamsWidget document={document}></TeamsWidget>
        <SettingsWidget document={document}></SettingsWidget>
        <NotesWidget document={document}></NotesWidget>
      </div>
    </div>
  );
};
