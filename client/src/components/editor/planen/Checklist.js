import React, { useEffect, useState } from "react";
import { DayField } from "./DayField";

export const Checklist = ({ document }) => {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState()
  const today = new Date();

  useEffect(() => {
    setCurrentDate(today)

    //not final
    //const obj = { date: today, weekday: getWeekday(today) };
    //setDays([obj, obj, obj, obj, obj, obj, obj]);
  }, [document]);

  useEffect(() => {
    if(currentDate){
      const tempDays = []

    console.log(currentDate)
      
    for (let index = 0; index < 7; index++) {
      var date = new Date(currentDate.getTime() + (86400000 *index))
      tempDays.push({date: date, weekday: getWeekday(date)})
    }

    setDays(tempDays)
    }
    
    
  }, [currentDate])
  

  const getWeekday = (day) => {
    const weekday = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "samstag",
    ];

    return weekday[day.getDay()];
  };

  console.log(days)
  
  const getWeek = (currentDate) => {
    //https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/#:~:text=Add%20the%20number%20of%20days,get%20the%20current%20week's%20number.
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

    return Math.ceil(days / 7);
  }



  return (
    <div className="card w-full h-screen bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="w-1/3 flex items-center text-2xl font-semibold">
            Kalenderwoche {getWeek(today)}
          </div>
          <div>
            <button className="btn btn-wide" onClick={() => setCurrentDate(today)}>
              {today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear()}
            </button>
          </div>
          <div className="flex justify-end gap-2 w-1/3">
            <button className="btn btn-circle" onClick={() => {var date = new Date(currentDate.getTime() - (86400000 * 7)); setCurrentDate(date)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="btn btn-circle" onClick={() => {var date = new Date(currentDate.getTime() + (86400000 * 7)); setCurrentDate(date)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-red-100 grid grid-cols-7 h-1/2">
          <DayField day={days[0]} currentDate={currentDate}></DayField>
          <DayField day={days[1]} currentDate={currentDate}></DayField>
          <DayField day={days[2]} currentDate={currentDate}></DayField>
          <DayField day={days[3]} currentDate={currentDate}></DayField>
          <DayField day={days[4]} currentDate={currentDate}></DayField>
          <DayField day={days[5]} currentDate={currentDate}></DayField>
          <DayField day={days[6]} currentDate={currentDate}></DayField>
        </div>
        <div className="divider"></div>
        <div className="flex ">
          <div>hallo</div>
          <div className="divider divider-horizontal"></div>
          <div>hallo</div>
        </div>
      </div>
    </div>
  );
};
