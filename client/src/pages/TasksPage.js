import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box, Heading, Content } from "react-bulma-components";
import FooterSection from "../components/FooterSection";
import DailyRoutines from "../components/DailyRoutines";
import WeeklyRoutines from "../components/WeeklyRoutines";
import axios from "axios";
import moment from "moment";
import "./mainstyle.css";

function TasksPage() {
  const [dailyTasks, setdailyTasks] = useState([]);
  const [weeklyTasks, setweeklyTasks] = useState([]);

  // if(process.env.NODE_ENV === 'production'){
  //   apiurl = '/'
  // }

  //FUNCTIONS FOR THE "DONE" BUTTON
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
  //once clicked "done" button, the "lastCompletedAt" will be recorded into the datatbase
  // when load the daily tasks, will search for
  // if the lastcompleted > 12am today(startOfday), means done, do not load
  // if the lastcompleted < 12am today, means still undone, load,

  // so need anythingn with (lastcompletedat<12am)

  // function markCompleted(){
  let dayBoundary = moment().startOf("day").toDate();
  console.log(dayBoundary);

  //  return moment(this.lastCompletedAt) > dayBoundary
  // }

  // TODAY'S TASKS:
  // 1. LOAD ALL THE DAILY TASKS "UNDONE"
  async function getdailyTasks() {
    await axios
      .get("/api/routines/day", {
        withCredentials: true,
      })
      .then((res) => {
        const undoneDayTasks = res.data;
        console.log(undoneDayTasks);

        const undoneDayTasksNew = undoneDayTasks.filter(
          (dayTask) =>
            dayTask.lastCompletedAt === undefined 
            // dayTask.lastCompletedAt < dayBoundary
        );
        console.log(undoneDayTasksNew);
        //console.log(undoneDayTasksDone[1].lastCompletedAt)
          console.log(moment(undoneDayTasks[1].lastCompletedAt).toDate())

          if(moment(undoneDayTasks[1].lastCompletedAt).toDate() > dayBoundary){
            console.log('TRUE')
          }
        const undoneDayTasksDone= undoneDayTasks.filter(
          (dayTask) => moment(dayTask.lastCompletedAt).toDate() > dayBoundary
        );
        console.log("undoneDayTaskDone: ", undoneDayTasksDone)

        setdailyTasks(
          undoneDayTasksNew.map((dailyTask) => ({
            ...dailyTask,

            //onComplete,
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
      .then((res) => {
        console.log("get weekly task for today");
        console.log(res.data);
        setweeklyTasks(
          res.data.map((weeklyTask) => ({
            ...weeklyTask,
            //onComplete,
          }))
        );
      })
      .catch((err) => console.log(err));
  }

  // TASKS FOR LATER:
  // 1. ALL WEEKLY TASKS "LATER"
  // 2 . ALL OTHER TASKS "LATER"

  return (
    <AppMaster>
      <Box>
        <Heading align="center" className = "RoutineTitle" >TODAY'S TASKS</Heading>
        <Content align="center">
        <p>Today is {moment().format("dddd, MMMM Do YYYY")}</p>
          <p className="text">Don't stress! Set your timer and start from somewhere!</p>
        </Content>
      </Box>

      <Box>
        <DailyRoutines dailyRoutines={dailyTasks} />
        <WeeklyRoutines weeklyRoutines={weeklyTasks} />
      </Box>

      {/* <Box>
        <Heading>Task for later</Heading>
      </Box> */}

      <FooterSection />
    </AppMaster>
  );
}

export default TasksPage;
