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



function RegisterForm() {
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const [payload, setPayload] = useState({});

  const handleChange = async (event) => {
    const type = event.target.name;

    // payload looks like: {
    //     email: '',
    //     password: '',
    //     password_again: ''
    // }
    setPayload({
      ...payload,
      [type]: event.target.value, // dynamically set the type of payload
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // check if password submitted are the same
    if (payload.password !== payload.password_again) {
      return setErrors(["Passwords do not match!"]);
    }

    // call api to login
    const response = axios
      .post("http://localhost:3001/api/register", payload, {
        withCredentials: true,
      })
      .then((res) => {
        history.push("/welcome");
      })
      .catch((err) => {
        console.log(err.response);
        const errorMsg = err.response.data.errors.map((err) => err.msg);
        // failed to register
        setErrors([...errorMsg]);
      });
  };

  return (
    <Box>
      <Container>
        <Card>
          <Card.Header>
            <Card.Header.Title>Please register</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder="Text input"
                  value={payload.email}
                />
              </Control>
            </Field>

            <Field>
              <Label>Password</Label>
              <Control>
                <Input name="password" placeholder="password" value={payload.password} type="password" onChange={handleChange} />
              </Control>
            </Field>

            <Field>
              <Label>Password again</Label>
              <Control>
                <Input name="password_again" placeholder="password again" value={payload.password_again} type="password" onChange={handleChange} />
              </Control>
            </Field>

            <Help>
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </Help>
          </Card.Content>
          <Card.Footer>
            <Field kind="group">
              <Control>
                <Button type="primary"   color="primary" onClick={onSubmit}>
                  Register
                </Button>
              </Control>
            </Field>
          </Card.Footer>
        </Card>
      </Container>
    </Box>
  );
}

export default RegisterForm;
