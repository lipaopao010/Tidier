import React from "react";
import PublicMaster from "./layout/public/publicMaster";
import LoginForm from "../components/loginForm";

function Loginpage(props) {
  return (
  
      <PublicMaster style={{ height: "100%" }}>
      
        < LoginForm />
        
      </PublicMaster>
    
  );
}

export default Loginpage;
