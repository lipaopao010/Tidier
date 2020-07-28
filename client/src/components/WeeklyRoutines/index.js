import React from 'react';

import { List, Box, Section } from 'react-bulma-components';
import WeeklyRoutineItem from '../WeeklyRoutineItem';

export default function WeeklyRoutines({ weeklyRoutines = []}){
    return (
    // here to load the individual items in the list
    <Section>
    <Box>
    <List >
        <List.Item>{ weeklyRoutines.map((weeklyRoutine)=>(<WeeklyRoutineItem key ={weeklyRoutine._id} {...weeklyRoutine}/>))}</List.Item>
        
    </List>
    </Box>
    </Section>

    )}


    