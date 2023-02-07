import React from "react";
import MakePair from "./MakePair";
import axios from "axios";

const Button = (props) => {
  let { students, setCount, setPairs } = props;

  //配列をシャッフルする関数

  async function go() {
    const result = MakePair(20, students);
    setPairs(result);
    setCount(1)
    console.log(result);
    const { data } = await axios.post("/gcp", { input : JSON.stringify(result) });
    console.log(data);
  }

  return (
    <div className="make-pair-button">
      <button onClick={() => go()}>Make pairs</button>
    </div>
  );
};

export default Button;
