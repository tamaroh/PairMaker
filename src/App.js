import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import Button from "react-bootstrap/Button";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (user.access_token !== undefined) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div>
      <h5 className="subtitle">Pair Maker</h5>
      {profile ? (
        <div>
          <Button
            onClick={logOut}
            className="login-logout_btn"
            variant="secondary"
          >
            Log out
          </Button>
          <Home />
        </div>
      ) : (
        <Button
          className="login-logout_btn"
          variant="secondary"
          onClick={() => login()}
        >
          Sign in with Google 🚀{" "}
        </Button>
      )}
    </div>
  );
}
export default App;
