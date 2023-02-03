import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { GoogleOAuthProvider } from "@react-oauth/google";

console.log(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
