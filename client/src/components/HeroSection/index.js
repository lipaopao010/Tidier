import React from 'react';
import './style.css';
import moment from "moment";

import { Hero, Section , Container, Heading, Columns, Button} from 'react-bulma-components';




export default function HeroSection (){

    return(

      <Section className="Background">
        <Hero size="medium"  >
          <Hero.Body>
            <Container>
                <Columns>
                    <Columns.Column size={4}>
                        <p className="bd-notification is-success"></p>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <p className="bd-notification is-success welcome1">
                        <Heading align="center">
                            Make your house tidier
   
                        </Heading>

                        <Heading subtitle size={6} align="center">
                            Today is {moment().format("dddd, MMMM Do YYYY")}
                        </Heading>
 

                        <p align="center">
                        <Button align="center" renderAs="a" href="/register">
                            Register 
                        </Button>
                        <Button align="center" renderAs="a" href="/login">
                            Login here
                        </Button>
                        </p>

                        <Heading subtitle size={6} align="center">
                            scroll down to see some introduction
                        </Heading>


                        
                        </p>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <p className="bd-notification is-success"></p>
                    </Columns.Column>
                </Columns> 
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    )}