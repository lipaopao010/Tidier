import React, { useEffect } from "react";
import Nav from "./NavbarSection";

import GlobalStore from "./../../../utils/context/GlobalStore";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AppMaster(props) {
  const store = GlobalStore.useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/current-user", {
        withCredentials: true,
      })
      .then((response) => {
        store.auth.dispatchAuth({
          type: "set-user",
          payload: response.data.data,
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          return history.push("/");
        }
        console.log({ err });
      });
  }, []);

  return (
    <main {...props}>
      <Nav></Nav>
      {props.children}
      
    </main>
  );
}

export default AppMaster;
