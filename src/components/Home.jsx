import "../App.css";
import Display from "./Display";
import { useState } from "react";

function Home() {
  const [students, setStudents] = useState("");
  const [count, setCount] = useState(0);
  const [pairs, setPairs] = useState([]);
  const [displayState, setDisplayState] = useState(false);

  return (
    <div>
      <h1 className="title">Input names</h1>
      <Display
        students={students}
        setStudents={setStudents}
        count={count}
        setCount={setCount}
        displayState={displayState}
        setDisplayState={setDisplayState}
        pairs={pairs}
        setPairs={setPairs}
      />
    </div>
  );
}
export default Home;
