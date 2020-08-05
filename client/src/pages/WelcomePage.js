// in this page , it will show the welcome MessageChannel(hero) and the link to the tasks page
import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Box, Heading } from "react-bulma-components";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import PublicMaster from "./layout/public/publicMaster";
import "./mainstyle.css"

function WelcomePage() {
  return (
    <PublicMaster style={{ height: "100%" }}>
      <>
        <HeroSection />
        <Box className="intro">
          <Box className = "introcontent">
          <Heading subtitle size={10} align="center">
            About Tidier
          </Heading>
          <p align="center">Cleaning and declutter are part of life. </p>
          <p align="center">
            By using this tidier app , you just need to try to finish your daily
            tasks.
          </p>
          <p align="center">
            After a few weeks, it will help you to form a habit.
          </p>
          <p align="center">
            The room will get cleaner and tidier, but only takes small amount of
            time!
          </p>
          </Box>
        </Box>

        <FooterSection />
      </>
    </PublicMaster>
  );
}

export default WelcomePage;
