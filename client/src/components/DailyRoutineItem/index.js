import React from "react";
import { Button, Columns} from "react-bulma-components";
import DetailSection from '../DetailSection';
export default function DailyRoutineItem({
  _id,
  name,
  details,
  deleteDayRoutine,
  onUpdate,
  onComplete,
  
}) {
  return (
    <Columns>
      <Columns.Column size={8}>
        <p className="bd-notification">{name}</p>
        <DetailSection details={details}/>
      </Columns.Column>
      
       
      
      <Columns.Column size={2}>
      {onComplete &&<Button onClick={()=>{onComplete(_id)}}>DONE</Button>}
      {onUpdate &&<Button onClick={()=>{onUpdate(_id)}}>EDIT</Button>}
      </Columns.Column>
      <Columns.Column size={2}>
      
      {deleteDayRoutine &&<Button onClick={()=>{deleteDayRoutine(_id)}}>DELETE</Button>}
      </Columns.Column>
    </Columns>
  );
}
