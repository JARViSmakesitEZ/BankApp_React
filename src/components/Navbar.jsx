import React from "react";
import Navtext from "./Navtext";

function Navbar(props) {
  return (
    <nav>
      <Navtext text="Welcome to LIB ." />
      <div id="logo">
        <img src="assets/logo.png" alt="bankLogo" />
      </div>
    </nav>
  );
}

export default Navbar;
