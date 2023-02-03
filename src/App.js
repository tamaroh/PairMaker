import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import Home from "./components/Home";
import Login_require from "./components/Login_require";
import Login_failure from "./components/Login_failure";


function App() {
  const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login_require />} />
    //     <Route path="/auth" element={<Auth />} />
    //     <Route path="/auth/callback/success" element={<Home />} />
    //     <Route path="/auth/callback/failure" element={<Login_failure />} />
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;
