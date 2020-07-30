//this page will list all the routines, daily,weekly,montly,quarterly
import React, { useState, useEffect } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axios from "axios";

import AppMaster from "./layout/app/appMaster";
import FooterSection from "./../components/FooterSection";
import { Box, Heading, Button } from "react-bulma-components";
import DailyRoutines from "../components/DailyRoutines";
import WeeklyRoutines from "../components/WeeklyRoutines";

// this page will load all the routines for current user , will have "delete", "edit", "add" button.

function RoutinesPage() {
  const [dailyRoutines, setdailyRoutines] = useState([]);

  // NEW FUNCTION TO ADD ROUTINES

  // 1. LOAD ALL THE DAILY ROUTINES

  async function getdailyRoutines() {
    await axios
      .get("http://localhost:3001/api/routines/day", {
        withCredentials: true,
      })
      .then((res) =>
        setdailyRoutines(
          res.data.map((dailyRoutine) => ({
            ...dailyRoutine,
            deleteDayRoutine,
            // onDelete,onUpdate
          }))
        )
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getdailyRoutines();
  }, []);

  // 2. ADD DAILY ROUTINES

  // 3. UPDATE DAILY ROUTINES
  // 4. DELETE DAILY ROUTINES

  async function deleteDayRoutine(itemId) {
    await axios
      .delete(`http://localhost:3001/api/routines/${itemId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        console.log("item is deleted!");

        window.location.reload();
        console.log({ dailyRoutines });
        //const clone = [...dailyRoutines]
        //const filtered = clone.filter((routine) => routine._id !== itemId)
        ///setdailyRoutines(filtered)
      });
  }

  // 5. LOAD ALL THE WEEKLY ROUTINES

  function getWeeklyTasks() {
    const weekdayToday = moment().format("dddd");
    axios
      .get("http://localhost:3001/api/routines/week?day=" + weekdayToday, {
        withCredentials: true,
      })
      .then((res) =>
        setdailyRoutines(
          res.data.map((dailyRoutine) => ({
            ...dailyRoutine,
            // onDelete,onUpdate
          }))
        )
      )
      .catch((err) => console.log(err));
  }
  
  // 6. ADD WEEKLY ROUTINES
  // 7. UPDATE WEEKLY ROUTINES
  // 8. DELETE WEEKLY ROUTINES

  // 9. LOAD ALL THE OTHER ROUTINES
  // 10. ADD OTHER ROUTINES
  // 11. UPDATE OTHER ROUTINES
  // 12. DELETE OTHER ROUTINES

  return (
    <AppMaster>
      <>
        <Box>
          <Heading>Daily routines</Heading>
          {/* <Button onClick={onAddDaily}>Add new</Button> */}
          <DailyRoutines dailyRoutines={dailyRoutines} />
        </Box>

        <Box>
          <Heading>Weekly routines</Heading>
          {/* <Button onClick={onAddWeekly}>Add new</Button> */}
          <WeeklyRoutines weeklyRoutines={weeklyRoutines} />
        </Box>
        {/* <Box>
          <Heading>Less frequent routines</Heading>
          <Button onClick={onAddWeekly}>Add new</Button> 
          <OtherRoutineTotal 
          otherRoutines={otherRoutines}
          />
        </Box> */}

        <FooterSection />
      </>
    </AppMaster>
  );
}

export default RoutinesPage;
