//this page will list all the routines, daily,weekly,montly,quarterly
import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axios from "axios";
//import moment from "moment";
import "./RoutinesPage.css";

import AppMaster from "./layout/app/appMaster";
import DailyRoutines from "../components/DailyRoutines";
import WeeklyRoutines from "../components/WeeklyRoutines";
import FooterSection from "./../components/FooterSection";
import { Box, Heading, Content } from "react-bulma-components";

export default function RoutinesPage() {
  const [dailyRoutines, setdailyRoutines] = useState([]);
  const [weeklyRoutines, setweeklyRoutines] = useState([]);

  // 1. LOAD ALL THE DAILY ROUTINES--done

  async function getdailyRoutines() {
    await axios
      .get("/api/routines/day", {
        withCredentials: true,
      })
      .then((res) =>
        setdailyRoutines(
          res.data.map((dailyRoutine) => ({
            ...dailyRoutine,
            deleteRoutine,
          }))
        )
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getdailyRoutines();
  }, []);

  // 2. ADD DAILY ROUTINES

  async function addNewDayRoutine(routine) {
    await axios
      .post("/api/routines/day", routine, {
        withCredentials: true,
      })
      .then((res) => {
        const newDailyRoutine = { ...res.data, deleteRoutine };
        console.log(res.data);
        setdailyRoutines([...dailyRoutines, newDailyRoutine]);

        console.log("new routine added");
      })
      .catch((err) => console.log(err));
  }

  // 3. UPDATE DAILY ROUTINES

  // async function editDayRoutine(updatedDayRoutine, itemId) {
  //   await axios
  //     .put(`/api/routines/${itemId}`, updatedDayRoutine, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       console.log("item is updated!");
  //     })
  //     .catch((err) => console.log(err));
  // }

  // 4. DELETE DAILY ROUTINES

  async function deleteRoutine(itemId) {
    await axios
      .delete(`/api/routines/${itemId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        console.log("item is deleted!");

        window.location.reload();
        // console.log({ dailyRoutines });
        // const clone = [...dailyRoutines];
        // const filtered =
        //   clone.filter((routine) => routine._id !== itemId) /
        //   setdailyRoutines(filtered);
      });
  }

  // 5. LOAD ALL THE WEEKLY ROUTINES

  async function getweeklyRoutines() {
    await axios
      .get("/api/routines/week", {
        withCredentials: true,
      })
      .then((res) =>
        setweeklyRoutines(
          res.data.map((weeklyRoutine) => ({
            ...weeklyRoutine,
            deleteRoutine,
          }))
        )
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getweeklyRoutines();
  }, []);

  // 6. ADD WEEKLY ROUTINES
  async function addNewWeekRoutine(routine) {
    await axios
      .post("/api/routines/week", routine, {
        withCredentials: true,
      })
      .then((res) => {
        const newWeeklyRoutine = { ...res.data, deleteRoutine };
        console.log(res.data);
        console.log(newWeeklyRoutine);
        setweeklyRoutines([...weeklyRoutines, newWeeklyRoutine]);

        console.log("new routine added");
      })
      .catch((err) => console.log(err));
  }

  return (
    <AppMaster>
      <>
        <Box>
          <Heading align="center" className = "RoutineTitle">
            MANAGE YOUR ROUTINES
          </Heading>
          {/* <Content align="center">
            <p>
              you can delete and add new routines. They will be updated in your
              task page
            </p>
          </Content> */}
        </Box>
        <Box className = "dayroutines1">
          <Heading className ="heading1">Daily routines</Heading>

          <DailyRoutines
            dailyRoutines={dailyRoutines}
            addNewDayRoutine={addNewDayRoutine}
          />
        </Box>

        <Box>
          <Heading className ="heading1" >Weekly routines</Heading>

          <WeeklyRoutines
            weeklyRoutines={weeklyRoutines}
            addNewWeekRoutine={addNewWeekRoutine}
          />
        </Box>

        <FooterSection />
      </>
    </AppMaster>
  );
}
