import React from "react";
import { render } from "react-dom";
import "./style.css";

const Greeeting = () => (
  <>
    <h1>Hello from react</h1>
    <div id="image"></div>      
  </>
);

render(<Greeeting />, document.getElementById("root"));
