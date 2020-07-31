import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box, Heading} from "react-bulma-components";
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

  //FUNCTIONS FOR THIS PAGE
  async function onComplete(itemId) {
    await axios
      .patch(
        `/api/routines/${itemId}`,
        { lastCompletedAt: new Date() },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        console.log("complete time is recorded!");
      })
      .catch((err) => console.log(err));
  }


  // functions for the status

  let dayBoundary = moment().startOf("day").toDate()
  //   return moment(this.lastCompletedAt) > boundary
  // TODAY'S TASKS:
  // 1. LOAD ALL THE DAILY TASKS "UNDONE"--"UNDONE"
  async function getdailyTasks() {
    await axios
      .get("/api/routines/day", {
        withCredentials: true,
      })
      .then((res) => {
        const undoneDayTasks = res.data.filter(
          (dayTask) => (dayTask.status = "undone")
        );

        //console.log(undoneDayTasks),

        setdailyTasks(
          undoneDayTasks.map((dailyTask) => ({
            ...dailyTask,

            onComplete,
          }))
        );
        console.log("get daily tasks");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getdailyTasks();
    getWeeklyTasks();
  }, []);

  // 2. LOAD ALL THE WEEKLY TASKS "UNDONE"--"UNDONE" & DAY OF THIS WEEK
  function getWeeklyTasks() {
    const weekdayToday = moment().format("dddd");
    console.log(weekdayToday);
    axios
      .get("/api/routines/week?day=" + weekdayToday, {
        withCredentials: true,
      })
      .then((res) =>{
      console.log("get weekly task for today");
      console.log(res.data)
        setweeklyTasks(
          res.data.map((weeklyTask) => ({
            ...weeklyTask,
            
          }))
        )}
      )
      .catch((err) => console.log(err));
  }
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

      <Box><Heading>Task for later</Heading></Box>

      <FooterSection />
    </AppMaster>
  );
}

export default TasksPage;
