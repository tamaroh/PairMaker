import "./components_styles/Home.css";
import Display from "./Display";
import { useState } from "react";

function Home() {
  const [students, setStudents] = useState("");
  const [count, setCount] = useState(0);
  const [pairs, setPairs] = useState([]);
  const [displayState, setDisplayState] = useState(false);
  const [sheetId, setSheetId] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div>
      <h1 className="title">Input names <img src="https://i.ibb.co/XJy9VKf/teamwork.png" alt="teamwork" border="0" height={30}/></h1>
      <Display
        students={students}
        setStudents={setStudents}
        count={count}
        setCount={setCount}
        displayState={displayState}
        setDisplayState={setDisplayState}
        pairs={pairs}
        setPairs={setPairs}
        sheetId={sheetId}
        setSheetId={setSheetId}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
}
export default Home;
