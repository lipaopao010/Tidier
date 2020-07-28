//this page will list all the routines, daily,weekly,montly,quarterly
import React, { useState, useEffect} from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axios from "axios";

import AppMaster from "./layout/app/appMaster";
import FooterSection from "./../components/FooterSection";
import { Box, Heading, Button } from "react-bulma-components";
import DailyRoutines from "../components/DailyRoutines";
import WeeklyRoutines from "../components/WeeklyRoutines";



// this page will load all the routines for current user , will have "delete", "edit", "add" button.

function RoutinesPage()
 {

  const [dailyRoutines, setdailyRoutines] = useState([]);

    //const onDelete = API.deleteBook;

    // axios.delete('http://localhost:3001/api/routines/5321iooio1oi3',{
    //   withCredentials: true
    // })
    async function getdailyRoutines(){
      await axios.get('http://localhost:3001/api/routines/day', {
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

    useEffect(() => {
        
        getdailyRoutines()
        
    }, [])

    // NEW FUNCTION TO ADD ROUTINES

    // const history = useHistory();
    // const [posts, setPosts] = useState([])

  return (
    <AppMaster>
      <>
        <Box>
          <Heading>Daily routines</Heading>
          {/* <Button onClick={onAddDaily}>Add new</Button> */}
          <DailyRoutines
          dailyRoutines={dailyRoutines}
          />
        </Box>

        <Box>
          <Heading>Weekly routines</Heading>
          {/* <Button onClick={onAddWeekly}>Add new</Button> */}
          {/* <WeeklyRoutines
          weeklyRoutines={weeklyRoutines} */}
          
        </Box>
        {/* <Box>
          <Heading>Less frequent routines</Heading>
          <Button onClick={onAddWeekly}>Add new</Button> 
          <OtherRoutineTotal 
          otherRoutines={otherRoutines}
          />
        </Box> */}
        
        <FooterSection/>
      </>
    </AppMaster>
  );
}

export default RoutinesPage;
