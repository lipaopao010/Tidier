import React from "react";
import DailyRoutineItem from "../DailyRoutineItem";
import AddNewDay from "../AddNewDay";
import { List, Box, Section } from "react-bulma-components";

export default function DailyRoutines({
  dailyRoutines = [],
  addNewDayRoutine,
}) {
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

        {addNewDayRoutine && <AddNewDay addNewDayRoutine={addNewDayRoutine} />}
      </Box>
    </Section>
  );
}
