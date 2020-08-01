import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";
import { Box, Content } from "react-bulma-components";
import FooterSection from "../components/FooterSection";

function TipsPage() {
  return (
    <AppMaster>
      <Content>
        <h1 align="center"> Some tips for your rouitnes :</h1>
        <Box>
          <p>Cleaning kit for different rooms</p>
          <p>Get the help from your family member</p>
          <p>Teach your kids how to clean. Prepare them a little cleaning kit</p>
          <p>Don't stress if you can't finish your task</p>
          <p>set the timer can help you concentrate and finish the tasks quicker</p>
        </Box>
      </Content>

      <FooterSection />
    </AppMaster>
  );
}

export default TipsPage;
