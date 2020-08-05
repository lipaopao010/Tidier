import React from "react";
import { Navbar } from "react-bulma-components";
import logo from "../../../assets/img/Tidier-Logo.png";
import axios from "axios";

export default function Nav() {
  // logout function
  const logout = () => {
    axios
      .get("/api/logout")
      .then((response) => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar className="navcontent">
      <Navbar.Brand>
        <Navbar.Item>
          <img src={logo} alt="Tidier logo" width="112" height="28" />
        </Navbar.Item>
        <Navbar.Item href="/tasks">Tasks</Navbar.Item>
        <Navbar.Item href="/routines">Routines</Navbar.Item>
        <Navbar.Item href="/tips">Tips</Navbar.Item>
        <Navbar.Item onClick={logout} position="end">
          Log out
        </Navbar.Item>
      </Navbar.Brand>

      {/* <Navbar.Menu is-active>
         
          <Navbar.Container position="end">
            <Navbar.Item  onClick={logout} position="end">
                  Log out
            </Navbar.Item>
          </Navbar.Container> 
        </Navbar.Menu> */}
    </Navbar>
  );
}
