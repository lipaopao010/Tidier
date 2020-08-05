import React from "react";
import { Button, Columns } from "react-bulma-components";
import DetailSection from "../DetailSection";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
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
    <Columns breakpoint="mobile">
      <Columns.Column size ={3}>
        <strong> {dayofWeek} </strong>
      </Columns.Column>
      <Columns.Column size={5}>
        <p className="bd-notification">{name}
        <DetailSection details={details}/>
        </p>
      </Columns.Column>

      <Columns.Column size={1}>
        {onComplete && (
          <Button
            onClick={() => {
              onComplete(_id);
            }}
          >
            <MdDone/>
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
            <RiDeleteBin5Line/>
          </Button>
        )}
      </Columns.Column>
    </Columns>
  );
}
