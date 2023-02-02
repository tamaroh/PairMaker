import "./App.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState("");
  const [count, setCount] = useState(0);
  const [pairs, setPairs] = useState([]);

  return (
    <div>
      <h1 className="title">Pair Maker</h1>
      <Display
        students={students}
        setStudents={setStudents}
        count={count}
        setCount={setCount}
        pairs={pairs}
        setPairs={setPairs}
      />
    </div>
  );
}
export default App;
