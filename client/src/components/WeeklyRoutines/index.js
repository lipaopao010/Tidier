import React from "react";
import AddNewWeek from "../AddNewWeek";
import { List, Box, Section } from "react-bulma-components";
import WeeklyRoutineItem from "../WeeklyRoutineItem";

export default function WeeklyRoutines({
  weeklyRoutines = [],
  addNewWeekRoutine,
}) {
  return (
    // here to load the individual items in the list
    <Section>
      <Box className="dayroutines">
        <List className="daylists">
          <List.Item>
            {weeklyRoutines.map((weeklyRoutine) => (
              <WeeklyRoutineItem key={weeklyRoutine._id} {...weeklyRoutine} />
            ))}
          </List.Item>
        </List>
        {addNewWeekRoutine && (
          <AddNewWeek addNewWeekRoutine={addNewWeekRoutine} />
        )}
      </Box>
    </Section>
  );
}
