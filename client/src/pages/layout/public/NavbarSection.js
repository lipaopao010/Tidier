import React from 'react';

import { Navbar, Button } from 'react-bulma-components';
import logo from "../../../assets/img/Tidier-Logo.png";
import GlobalStore from "../../../utils/context/GlobalStore";
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

export default function Nav(){

    const store = GlobalStore.useGlobalContext();

    const logout = () => {
      axios.get('http://localhost:3001/api/logout')
          .then((response) => {
              window.location.href = '/'
          }).catch((err) => {
              console.log(err);
          })
  }
    



    return (
      <Navbar active={true}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img src={logo} alt="Tidier logo" width="112" height="28" />
          </Navbar.Item>
        </Navbar.Brand>

         <Navbar.Menu is-active>
         
          <Navbar.Container position="end">
            <Navbar.Item  onClick={logout}>
                {/* if user is not logged in then we display the logout button */}
                {!isEmpty(store.auth.currentUser) && (
                    <Button color="inherit"> Logout</Button>
                )}
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu> 
      </Navbar>
    )
  }