import React from "react";
import "./style.css";
import moment from "moment";

import {
  Hero,
  Section,
  Container,
  Heading,
  Columns,
  Button,
} from "react-bulma-components";

export default function HeroSection() {
  return (
    <Section className="Background">
      <Hero size="medium">
        <Hero.Body>
          <Container>
            <Columns>
              
              <Columns.Column >
                <p className="bd-notification is-success welcome1">
                  <Heading align="center" className="maintitle">TIDIER HOME FROM HERE</Heading>

                  {/* <Heading subtitle size={6} align="center">
                    Today is {moment().format("dddd, MMMM Do YYYY")}
                  </Heading> */}

                  <p align="center">
                    <Button className="introbutton" align="center" renderAs="a" href="/register">
                      REGISTER
                    </Button>
                    <Button className="introbutton" align="center" renderAs="a" href="/login">
                      LOGIN
                    </Button>
                  </p>
                </p>
              </Columns.Column>
              
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </Section>
  );
}
