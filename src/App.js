import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login_require from "./components/Login_require";
import Login_failure from "./components/Login_failure";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_require />} />
        <Route path="/auth/callback/success" element={<Home />} />
        <Route path="/auth/callback/failure" element={<Login_failure />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
