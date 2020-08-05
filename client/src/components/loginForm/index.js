import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Card,
  Form
} from "react-bulma-components";
const { Input, Field, Control, Label, Help } = Form;



function LoginForm() {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [payload, setPayload] = useState({});

  const handleChange = async (event) => {
    const name = event.target.name;
    
    // payload looks like: {
    //     email: '',
    //     password: '',
    // }
    setPayload({
      ...payload,
      [name]: event.target.value, // dynamically set the type of payload
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // call api to login

    const response = await axios
      .post(
        "/api/login",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        history.push("/tasks");
      })
      .catch((err) => {
        // not authenticated
        console.log(err)
        console.log(err.response);
        if (err.response.data.errors) {
          const errorMsg = err.response.data.errors.map((err) => err.msg);
          // failed to register
          setErrors([...errorMsg]);
        } else {
          setErrors(["Whoops please enter your credentials"]);
        }
      });
  };

  
  return (
    <Box className= "tips">
      <Container>
        <Card>
          <Card.Header>
            <Card.Header.Title>Welcome, please log in</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email input"
                  onChange={handleChange}
                  value = {payload.email}
                />
              </Control>
            </Field>

            <Field>
              <Label>Password</Label>
              <Control>
                <Input name="password" type="password" placeholder="password" onChange={handleChange} value={payload.password} />
              </Control>
            </Field>

            <Help color="danger">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </Help>
          </Card.Content>
          <Card.Footer>
            <Field kind="group">
              <Control>
                <Button   className="formbutton" type="primary" onClick={onSubmit}>
                  Log in
                </Button>
              </Control>
              <Control>
                <Button
                
                  onClick={() => history.push("/register")}
                >
                  Register here 
                </Button>
              </Control>
            </Field>
          </Card.Footer>
        </Card>
      </Container>
    </Box>
  );
}

export default LoginForm;
