//this page will show the tasks for that certain day.

//daily tasks

//weekly tasks

//monthly tasks

//quaterly tasks

import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import FooterSection from "../components/FooterSection";
import Nav from "../components/Nav";
import DailyRoutineTotal from '../components/DailyRoutines';
import WeeklyRoutineTotal from '../components/WeeklyRoutines';


function TasksPage() {
  return (
    <>
    <Nav/>
   <DailyRoutineTotal/>

   {/* need a function to select the task for the day */}
   <WeeklyRoutineTotal/>
    <FooterSection/>
    </>
  );
}


export default TasksPage;