import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import * as dotenv from "dotenv"; 
dotenv.config();
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
