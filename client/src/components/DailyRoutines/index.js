import React from 'react';

import { List, Box, Section } from 'react-bulma-components';
import DailyRoutineItem from '../DailyRoutineItem';

export default function DailyRoutineTotal({DailyRoutines = []}){
    return (
    // here to load the individual items in the list
    <Section>
    <Box>
    <List >
        <List.Item>{ DailyRoutines.map((DailyRoutine)=>(<DailyRoutineItem key ={DailyRoutine.id} {...DailyRoutine}/>))}</List.Item>
        
    </List>
    </Box>
    </Section>

    )}


    