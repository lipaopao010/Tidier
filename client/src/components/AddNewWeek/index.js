import React, {useState} from 'react';

import { Button, Form, Box } from 'react-bulma-components';
const { Input, Field, Control, Label,Select} = Form;


export default function AddNewWeek({addNewWeekRoutine}) {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [dayofWeek, setdayofWeek] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      console.log("clicked")
      if (!name) return;
      addNewWeekRoutine ({name,details,dayofWeek});
      setName("");
      setDetails("");
    };
  
    return (
      <Box className = "daylists">
        <Field >
            <Control>
              <Input className ="add" placeholder="ROUTINE NAME" value={name}
          onChange={e => setName(e.target.value)}/>
          <Input className ="add" placeholder="ROUTINE DETAILS" value={details}
          onChange={e => setDetails(e.target.value)} />
          <Label>Which day to complete this routine?</Label>
        <Control>
          <Select value={dayofWeek} onChange={e => setdayofWeek(e.target.value)}>
            <option >Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>

          </Select>
        </Control>
              <Button className ="add" type="primary" onClick={handleSubmit}>Add New Weekly Routine</Button>
            </Control>
          </Field>
          </Box>
    )}