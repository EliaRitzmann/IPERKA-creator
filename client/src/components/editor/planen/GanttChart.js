import React, { useEffect, useState } from "react";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../../config/firebase";
import { NewTaskModal, triggerNewTaskModal } from "./NewTaskModal";

export const GanttChart = ({document}) => {
    const currentDate = new Date();
    const [tasks, setTasks] = useState([])

    const tasksRef = query(
      collection(firestore, "tasks"),
      where("documentId", "==", document.id)
    );
    
    useEffect(
      () =>
        onSnapshot(tasksRef, (snapshot) => {
          setTasks([]);
          setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }),
      []
    );

    const elements = [{
      start: document.startDate.toDate(),
      end: document.dueDate.toDate(),
      name: document.documentName,
      id: document.id,
      type: "project",
      hideChildren: false
    }];

    console.log(tasks)

    for (let index = 0; index < tasks.length; index++) {
      //look if Dates make sense
      var start;
      var end;

      if(tasks[index].startDate.toDate() > tasks[index].dueDate.toDate()){
        start = tasks[index].dueDate.toDate()
        end = tasks[index].startDate.toDate()
      }else{
        start = tasks[index].startDate.toDate()
        end = tasks[index].dueDate.toDate()
      }

      elements.push({
        start: start,
        end: end,
        name: tasks[index].name,
        id: tasks[index].id,
        // progress: 25,
        // dependencies: ["Task 0"],
        type: "task",
        project: document.id
      },) 
    }
    

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
      <h2 className="card-title">Tasks:</h2>
        <Gantt tasks={elements} listCellWidth={""} locale="de"/>
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        <span className="font-medium ">legende:</span> <span className="badge bg-sky-400 border-sky-400">user 1</span> <span className="badge bg-lime-400 border-lime-400">user 2</span> 
        </div>
        <div className="flex">
        <NewTaskModal document={document}></NewTaskModal>
        <button className="btn" onClick={triggerNewTaskModal}>Hinzufügen</button>
        </div>
        </div>
       

      </div>
    </div>
  );
};
