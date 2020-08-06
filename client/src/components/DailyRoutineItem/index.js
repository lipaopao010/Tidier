import React from "react";
import { Button, Columns } from "react-bulma-components";
import DetailSection from "../DetailSection";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
export default function DailyRoutineItem({
  _id,
  name,
  details,
  deleteRoutine,
  onComplete,
}) {
  return (
    <Columns breakpoint="mobile">
      <Columns.Column size={8}>
        <p className="bd-notification">
          {name}
          <DetailSection details={details} />
        </p>
      </Columns.Column>

      <Columns.Column size={1}>
        {onComplete && (
          <Button
            onClick={() => {
              onComplete(_id);
            }}
          >
            <MdDone />
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
            <RiDeleteBin5Line />
          </Button>
        )}
      </Columns.Column>
    </Columns>
  );
}
