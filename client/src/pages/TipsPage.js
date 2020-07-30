import React, {useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AppMaster from "./layout/app/appMaster";

import FooterSection from "../components/FooterSection";



function TipsPage() {




      return (
    <AppMaster>
      {/* <span class="control">
      <label class="is-checkbox is-large is-warning">
        <input id="mycheckbox" checked="checked" type="checkbox">
        <span  class="icon is-large checkmark">
          <i class="fa fa-check"></i>
        </span>
        <span>My checkbox</span>
      </label>
       */}
      <FooterSection />
    </AppMaster>
  );
}

export default TipsPage;
