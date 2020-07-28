import React, {useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";

import FooterSection from "../components/FooterSection";
import DailyRoutineTotal from "../components/DailyRoutines";
import WeeklyRoutineTotal from "../components/WeeklyRoutines";
import axios from "axios";
import moment from "moment"; 

function TasksPage() {
  const [DailyRoutines, setdailyRoutines] = useState([]);
    
  // 1. dislpay task for current day, 
  //daily task ( with "done" button)

  //done function

  //later function

  // undone

  // if(process.env.NODE_ENV === 'production'){
  //   apiurl = '/'
  // }

  // need a function to select the task according to date 
  // isCompleted is false
  function getWeeklyTasks(){
    const weekdayToday = moment().format('dddd')
    axios.get('http://localhost:3001/api/routines/week?day=' + weekdayToday, {
              withCredentials: true,
         })
      .then(res=>

          setdailyRoutines(
          
              (res.data).map(
                  (dailyRoutine) =>(
                      {
              ...dailyRoutine,
              // onDelete,onUpdate
            }))
      ))
      .catch(err => console.log(err))
  }
  
  return (
    <AppMaster>
      
      <DailyRoutineTotal />

      
      <WeeklyRoutineTotal />
      <FooterSection />
    </AppMaster>
  );
}

export default TasksPage;
