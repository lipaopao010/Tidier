import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box, Heading, Content } from "react-bulma-components";
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
  // if the lastcompletedat < 12am today, means still undone, load,

  // so need anythingn with (lastcompletedat<12am)

  // function markCompleted(){
  let dayBoundary = moment().startOf("day").toDate();
  console.log(dayBoundary);

  //  return moment(this.lastCompletedAt) > dayBoundary
  // }

  // TODAY'S TASKS:
  // 1. LOAD ALL THE DAILY TASKS "UNDONE"--"UNDONE"
  async function getdailyTasks() {
    await axios
      .get("/api/routines/day", {
        withCredentials: true,
      })
      .then((res) => {

        const undoneDayTasks = res.data;
        console.log(undoneDayTasks);
        
        

        // undoneDayTasks.forEach(element => {
        //   if(undoneDayTasks.lastCompletedAt = "undefiend" )
          
        // });
        //if (undoneDayTasks[i].lastCompletedAt = "undefined")
        

      //   const undoneDayTasksNew = undoneDayTasks.filter(
      //    dayTask => dayTask.lastCompletedAt = "undefined"
      // );
      //     console.log(undoneDayTasksNew);
        //  if (moment(res.data[i].lastCompletedAt).isBefore(dayBoundary)){

        //  }
        // undoneDayTasks.map((newone)=>{console.log(newone.lastCompletedAt)});
        // console.log(undoneDayTasks[0].lastCompletedAt);
        // if(undoneDayTasks[1].lastCompletedAt = "undefined"){
        //   console.log("true")
        // }

        // let new1 = undoneDayTasks[0].lastCompletedAt;
        // console.log(moment(new1).toDate());
        // let new2 = moment(new1).toDate();
        
        // if (new2 > dayBoundary) {
        //   console.log("after");
        // }
        // if ((moment(res.data[1].lastCompletedAt).isBefore(dayBoundary))) {
        //   console.log("befoore");
        // }else{

        // console.log("false")
        // }

        // console.log(undoneDayTasks);

        setdailyTasks(
          undoneDayTasks.map((dailyTask) => ({
            ...dailyTask,

            // onComplete,
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
            // onComplete,
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
        <Heading align="center">Welcome to today's task</Heading>
        <Content align="center">
          <p>Don't stress! Set your timer and start from somewhere!</p>
        </Content>
      </Box>

      <Box>
        <DailyRoutines dailyRoutines={dailyTasks} />
        <WeeklyRoutines weeklyRoutines={weeklyTasks} />
      </Box>

      <Box>
        <Heading>Task for later</Heading>
      </Box>

      <FooterSection />
    </AppMaster>
  );
}

export default TasksPage;
