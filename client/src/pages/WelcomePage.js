// in this page , it will show the welcome MessageChannel(hero) and the link to the tasks page
import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import FooterSection from "../components/FooterSection";
import Nav from "../components/Nav";
import HeroSection from '../components/hero';

function WelcomePage() {
  return (
    <>
    <Nav/>
    <HeroSection/>
    <FooterSection/>
    </>
  );
}


export default WelcomePage;
