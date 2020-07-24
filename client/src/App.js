import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import WelcomePage from "./pages/WelcomePage";
import TasksPage from "./pages/TasksPage";
import RoutinesPage from "./pages/RoutinesPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <WelcomePage />
        </Route> 
        <Route exact path={"/tasks"}>
          <TasksPage />
        </Route>
        <Route exact path={"/routines"}>
          <RoutinesPage />
        </Route>
      </Switch>
    </Router> 
  );
}


export default App;
