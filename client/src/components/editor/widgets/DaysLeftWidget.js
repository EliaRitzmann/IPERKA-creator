import React, { useState } from "react";

export const DaysLeftWidget = () => {
  

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Zeit bis zur Abgabe:</h2>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center items-center h-full">
          <div className="flex flex-col ">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 56 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};
