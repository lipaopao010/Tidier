import React from 'react';
import { Button, Columns } from 'react-bulma-components';



export default function WeeklyRoutineItem({ 
    name, 
    onDelete,
    onMove
}){
    return (
        <Columns>
        <Columns.Column size={8}>
          <p className="bd-notification">{name}</p>
        </Columns.Column>
        <Columns.Column size={2}>
            <Button onClick = {onDelete}>DONE</Button> 
        </Columns.Column>
        <Columns.Column size={2}>
            <Button onClick = {onMove}>LATER</Button> 
        </Columns.Column>
        </Columns>
        

            
    )}