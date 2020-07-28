import React from "react";

import { List, Box, Section } from "react-bulma-components";
import DailyRoutineItem from "../DailyRoutineItem";

export default function DailyRoutines({dailyRoutines = []}) {
  

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
      </Box>
    </Section>
  );
}
