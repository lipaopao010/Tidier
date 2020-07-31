import React from "react";
import DailyRoutineItem from "../DailyRoutineItem";
import AddNew from "../AddNew";
import { List, Box, Section } from "react-bulma-components";



export default function DailyRoutines({dailyRoutines = [],addNewDayRoutine}) {
  

  return (
    // here to load the individual items in the list
    // ONLY LOAD THE DATA FOR THE CURRENT USER



    
    <Section>
      <Box>
        <List>
          <List.Item>
            {dailyRoutines.map((dailyRoutine) => (
              <DailyRoutineItem key={dailyRoutine.id} {...dailyRoutine} />
            ))}
          </List.Item>
        </List>

       <AddNew addNewDayRoutine={addNewDayRoutine}/>
      </Box>
    </Section>
  );
}
