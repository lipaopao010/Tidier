import React from "react";
import PublicMaster from "./layout/public/publicMaster";
import LoginForm from "../components/loginForm";

function Homepage(props) {
  return (
  
      <PublicMaster style={{ height: "100%" }}>
      
        < LoginForm />
        
      </PublicMaster>
    
  );
}

export default Homepage;
