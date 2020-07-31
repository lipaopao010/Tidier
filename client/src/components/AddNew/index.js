import React, {useState} from 'react';

import { Button, Form } from 'react-bulma-components';
const { Input, Field, Control} = Form;


export default function AddNew({addNewDayRoutine}) {
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

        <Field >
            <Control>
              <Input placeholder="add new routine name" value={name}
          onChange={e => setName(e.target.value)}/>
          <Input placeholder="add details for abouv routine" value={details}
          onChange={e => setDetails(e.target.value)} />
              <Button type="primary" onClick={handleSubmit}>Add New Daily Routine</Button>
            </Control>
          </Field>

      
    );
  }