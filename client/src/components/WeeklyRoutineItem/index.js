import React from "react";
import { Button, Columns } from "react-bulma-components";
import DetailSection from "../DetailSection";

export default function WeeklyRoutineItem({
  _id,
  dayofWeek,
  name,
  details,
  deleteRoutine,
  onUpdate,
  onAdd,
  onComplete,
}) {
  return (
    <Columns>
      <Columns.Column size={2}>
        <strong> {dayofWeek} </strong>
      </Columns.Column>
      <Columns.Column size={6}>
        <p className="bd-notification">{name}</p>
        <DetailSection details={details}/>
        
      </Columns.Column>

      <Columns.Column size={1}>
        {onComplete && (
          <Button
            onClick={() => {
              onComplete(_id);
            }}
          >
            DONE
          </Button>
        )}
        {onUpdate && (
          <Button
            onClick={() => {
              onUpdate(_id);
            }}
          >
            EDIT
          </Button>
        )}
      </Columns.Column>
      <Columns.Column size={1}>
        {deleteRoutine && (
          <Button
            onClick={() => {
              deleteRoutine(_id);
            }}
          >
            DELETE
          </Button>
        )}
      </Columns.Column>
    </Columns>
  );
}
