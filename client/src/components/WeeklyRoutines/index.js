import React from 'react';

import { List, Box, Section } from 'react-bulma-components';
import WeeklyRoutineItem from '../WeeklyRoutineItem';

export default function WeeklyRoutineTotal({ WeeklyRoutines = []}){
    return (
    // here to load the individual items in the list
    <Section>
    <Box>
    <List >
        <List.Item>{ WeeklyRoutines.map((WeeklyRoutine)=>(<WeeklyRoutineItem key ={WeeklyRoutine.id} {...WeeklyRoutine}/>))}</List.Item>
        
    </List>
    </Box>
    </Section>

    )}


    