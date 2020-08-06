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
        <h1 align="center"> SOME TIPS FOR YOU :</h1>
        <Box className="tips">
          <Box className="content1">
            <p>Get the help from your family member</p>
            <p>
              Teach your kids how to clean. Prepare them a little cleaning kit
            </p>
            <p>Don't stress if you can't finish your task</p>
            <p>
              set the timer can help you concentrate and finish the tasks
              quicker
            </p>
          </Box>
        </Box>

        <Box className="tips">
          <Box className="content1">
            <p>PREPARE YOUR OWN CLEANING KIT : </p>
            <li>
              Lemon + Lavender Disinfecting Spray (recipe below) or ALL-PURPOSE
              SPRAY
            </li>
            <li>
              Hydrogen Peroxide – I put a SPRAYER on the bottle and use it for
              disinfecting
            </li>
            <li>
              CASTILE SOAP – squirt in the toilet and scrub or add to the sink
              scrub (below) for a little extra cleaning action
            </li>
            <li>SINK SCRUB </li>
            <li>MICROFIBER CLEANING CLOTHS </li>
            <li>OXYGEN WHITENER – sprinkle in toilets to whiten</li>
            <li>POLISHING CLOTHS – FOR MIRRORS</li>
            <li>GLASS SPRAY BOTTLES</li>
          </Box>
        </Box>

        <Box className="tips">
          <Box className="content1">
            <p>THE MAGIC OF CATCH-ALL DAY :</p>
            <p>What is Catch-All Day?</p>
            <p>
              Catch-All Day is a day to catch up, get ahead, plan for the week
              ahead, relax, it’s what you need on any given Friday.
            </p>
            <p>
              When you don’t get the bathrooms clean on Monday you KNOW that you
              have time on Friday to clean those bathrooms OR you can save them
              until the next week.
            </p>
          </Box>
        </Box>
      </Content>

      <FooterSection />
    </AppMaster>
  );
}

export default TipsPage;
