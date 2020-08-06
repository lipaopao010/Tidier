import React, {useState} from 'react';

import { Button, Form, Box } from 'react-bulma-components';
const { Input, Field, Control} = Form;


export default function AddNewDay({addNewDayRoutine}) {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
   
    const handleSubmit = e => {
      e.preventDefault();
      console.log("clicked")
      if (!name) return;
      addNewDayRoutine ({name,details});
      setName("");
      setDetails("");
    };
  
    return (
        <Box className = "daylists">
        <Field className ="add">
            <Control>
              <Input className ="add" placeholder="ROUTINE NAME " value={name}
          onChange={e => setName(e.target.value)}/>
          <Input className ="add" placeholder="ROUTINE DETAILS" value={details}
          onChange={e => setDetails(e.target.value)} />
              <Button className ="add" type="primary" onClick={handleSubmit}>Add New Daily Routine</Button>
            </Control>
          </Field>
          </Box>

      
    );
  }