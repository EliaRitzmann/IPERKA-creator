import React, { useEffect, useState } from "react";

export const DaysLeftWidget = ({document}) => {
  const [value, setValue] = useState()
  useEffect(() => {

    const timer = setTimeout(() => {
      setValue((v) => v - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  useEffect(() => {
    console.log("data: "+ document.dueDate.toDate())
    var timediffrence = document.dueDate.toDate().getTime() -  new Date().getTime()
    setValue(timediffrence/1000)
    console.log("diff: " + Math.floor(value / (3600*24)))
  }, [])

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Zeit bis zur Abgabe:</h2>
        {value > 0 ? <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center items-center h-full">
          <div className="flex flex-col ">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": Math.floor(value / (3600*24)) }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": Math.floor(value % (3600*24) / 3600) }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": Math.floor(value % 3600 / 60) }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": Math.floor(value % 60) }}></span>
            </span>
            sec
          </div>
        </div> : <h1>keine zeit mehr</h1>}
        
      </div>
    </div>
  );
};
