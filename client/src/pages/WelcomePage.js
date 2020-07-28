// in this page , it will show the welcome MessageChannel(hero) and the link to the tasks page
import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import FooterSection from "../components/FooterSection";
import HeroSection from "../components/hero";
import AppMaster from "./layout/app/appMaster";

function WelcomePage() {
  return (
    <AppMaster>
      <>
        <HeroSection />
        <FooterSection />
      </>
    </AppMaster>
  );
}

export default WelcomePage;
