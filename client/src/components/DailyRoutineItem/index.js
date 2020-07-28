import React from "react";
import { Button, Columns} from "react-bulma-components";

export default function DailyRoutineItem({
  _id,
  name,
  details,
  onDelete,
  onUpdate,
  onComplete,
  saveForLater
}) {
  return (
    <Columns>
      <Columns.Column size={8}>
        <p className="bd-notification">{name}</p>
        <p >{details}</p>
      </Columns.Column>
      
       
      
      <Columns.Column size={2}>
      {onComplete &&<Button onClick={()=>{onComplete(_id)}}>DONE</Button>}
      {onUpdate &&<Button onClick={()=>{onUpdate(_id)}}>EDIT</Button>}
      </Columns.Column>
      <Columns.Column size={2}>
      {saveForLater && <Button onClick={()=>{saveForLater(_id)}}>LATER</Button>}
      {onDelete &&<Button onClick={()=>{onDelete(_id)}}>DELETE</Button>}
      </Columns.Column>
    </Columns>
  );
}
