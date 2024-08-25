import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import bopifylogo from "./bopify5.png"

function Login() {
  return (
    <div className="login">
      <img
        src={bopifylogo}
        alt=""
      />
      <a href={accessUrl}>LOGIN TO BOPIFY</a>
    </div>
  );
}

export default Login;
