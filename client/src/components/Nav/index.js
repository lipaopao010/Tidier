import React from 'react';

import { Navbar } from 'react-bulma-components';
import logo from "../../assets/img/Tidier-Logo.png";

export default function Nav(){
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img src={logo} alt="Tidier logo" width="112" height="28" />
          </Navbar.Item>
          <Navbar.Item href="/tasks">
              Tasks
            </Navbar.Item>
            <Navbar.Item href="/routines">
              Routines
            </Navbar.Item>
            <Navbar.Item href="/tips">
              Tips
            </Navbar.Item>
            <Navbar.Item href="/calender">
              Calender
            </Navbar.Item>
        </Navbar.Brand>

         <Navbar.Menu >
         
          <Navbar.Container position="end">
            <Navbar.Item href="#">
                  Log out
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu> 
      </Navbar>
    )
  }