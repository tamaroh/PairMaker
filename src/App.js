import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import Button from "react-bootstrap/Button";
import instructorList from "./list";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [userAddress, setUerAddress] = useState([])
  const [userPassword, setUerPassword] = useState([])


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

  function addressLogin(){
    if (Object.keys(instructorList).indexOf(userAddress) !== -1 && instructorList[userAddress] === userPassword){
      setProfile(true)
    }
  }
  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div>
      <div>
      <h5 className="subtitle">Pair Maker</h5>
      </div>
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
        <div>
          <Button
            className="login-logout_btn"
            variant="secondary"
            onClick={() => login()}
            >
            Sign in with Google 🚀{" "}
          </Button>
          <p>Or</p>
          <hr></hr>
          <div className="uniForm">
            <div className="formField">
              <label>Mail address</label>
              <input type="text" placeholder="メールアドレス" name="mailAddress" value={userAddress} onChange={(event) => setUerAddress(event.target.value)}/>
            </div>
            <div className="formField">
              <label>Password</label>
              <input type="text" placeholder="パスワード" name="password" value={userPassword} onChange={(event) => setUerPassword(event.target.value)}/>
            </div>
            <Button className="submitButton" onClick={() => addressLogin()}>Login</Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
