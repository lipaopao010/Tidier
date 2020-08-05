import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box, Content } from "react-bulma-components";
import FooterSection from "../components/FooterSection";
import "./mainstyle.css";

function TipsPage() {
  return (
    <AppMaster>
      <Content>
        <h1 align="center">  SOME TIPS FOR YOU :</h1>
        <Box className= "tips">
          <Box className ="content1">
          <p>Cleaning kit for different rooms</p>
          <p>Get the help from your family member</p>
          <p>Teach your kids how to clean. Prepare them a little cleaning kit</p>
          <p>Don't stress if you can't finish your task</p>
          <p>set the timer can help you concentrate and finish the tasks quicker</p>
          </Box>
        </Box>

        <Box className= "tips">
        <Box className ="content1">
          <p>Cleaning kit for different rooms</p>
          <p>Get the help from your family member</p>
          <p>Teach your kids how to clean. Prepare them a little cleaning kit</p>
          <p>Don't stress if you can't finish your task</p>
          <p>set the timer can help you concentrate and finish the tasks quicker</p>
          </Box>
        </Box>

        <Box className= "tips">
        <Box className ="content1">
          <p>Cleaning kit for different rooms</p>
          <p>Get the help from your family member</p>
          <p>Teach your kids how to clean. Prepare them a little cleaning kit</p>
          <p>Don't stress if you can't finish your task</p>
          <p>set the timer can help you concentrate and finish the tasks quicker</p>
          </Box>
        </Box>

      </Content>

      <FooterSection />
    </AppMaster>
  );
}

export default TipsPage;
