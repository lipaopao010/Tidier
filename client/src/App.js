import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from "./pages/WelcomePage";
import TasksPage from "./pages/TasksPage";
import RoutinesPage from "./pages/RoutinesPage";
import TipsPage from './pages/TipsPage';
import GlobalStore from "./utils/context/GlobalStore";

function App() {

  return (
    <Router>
      <GlobalStore.GlobalProvider>
      <Switch>
      <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/register"}>
          <RegisterPage />
        </Route>
        <Route exact path={"/welcome"}>
          <WelcomePage />
        </Route> 
        <Route exact path={"/tasks"}>
          <TasksPage />
        </Route>
        <Route exact path={"/routines"}>
          <RoutinesPage />
        </Route>
        <Route exact path={"/tips"}>
          <TipsPage />
        </Route>
      </Switch>
      </GlobalStore.GlobalProvider>
      
    </Router> 
  );
}


export default App;
