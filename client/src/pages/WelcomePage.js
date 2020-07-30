// in this page , it will show the welcome MessageChannel(hero) and the link to the tasks page
import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import PublicMaster from './layout/public/publicMaster';

function WelcomePage() {
  return (
    <PublicMaster style={{ height: "100%" }}>
      <>
        <HeroSection />
        <FooterSection />
      </>
    </PublicMaster>
  );
}

export default WelcomePage;
