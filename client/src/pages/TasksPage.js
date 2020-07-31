import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box } from 'react-bulma-components';
import FooterSection from "../components/FooterSection";
import DailyRoutines from "../components/DailyRoutines";
import WeeklyRoutines from "../components/WeeklyRoutines";
import axios from "axios";
import moment from "moment";

function TasksPage() {
  const [dailyTasks, setdailyTasks] = useState([]);
  const [weeklyTasks, setweeklyTasks] = useState([]);

  // if(process.env.NODE_ENV === 'production'){
  //   apiurl = '/'
  // }

  // need a function to select the task according to date
  // isCompleted is false
  function getWeeklyTasks() {
    const weekdayToday = moment().format("dddd");
    axios
      .get("/api/routines/week?day=" + weekdayToday, {
        withCredentials: true,
      })
      .then((res) =>
        setweeklyTasks(
          res.data.map((weeklyTask) => ({
            ...weeklyTask,
            // onDelete,onUpdate
          }))
        )
      )
      .catch((err) => console.log(err));
  }

 
  //FUNCTIONS FOR THIS PAGE

  // TODAY'S TASKS:
  // 1. LOAD ALL THE DAILY TASKS "UNDONE"--"UNDONE"
  async function getdailyTasks() {
    await axios
      .get("/api/routines/day", {
        withCredentials: true,
      })
      .then((res) =>
        setdailyTasks(
          res.data.map((dailyTask) => ({
            ...dailyTask,

            // DONE
          }))
        )
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getdailyTasks();
    getWeeklyTasks();
  }, []);
  // 2. LOAD ALL THE WEEKLY TASKS "UNDONE"--"UNDONE" & DAY OF THIS WEEK
  // 3. LOAD ALL OTHER ROUTINES "UNDONE" --"UNDONE" & OF CURRENT DAY

  // TASKS FOR LATER:
  // 1. ALL WEEKLY TASKS "LATER"
  // 2 . ALL OTHER TASKS "LATER"

  return (
    <AppMaster>
      <Box>
        <DailyRoutines dailyRoutines={dailyTasks} />

        <WeeklyRoutines weeklyRoutines={weeklyTasks} />
      </Box>
      <FooterSection />
    </AppMaster>
  );
}

export default TasksPage;
