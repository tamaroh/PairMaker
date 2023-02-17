import React from "react";
import MakePair from "./MakePair";
import axios from "axios";
import Button from "react-bootstrap/Button"
import "./components_styles/Btn.css"


const Btn = (props) => {
  let { students, setCount, setPairs } = props;

  //配列をシャッフルする関数
  async function go() {
    const result = MakePair(20, students);//第一引数で作成日数を決定している
    setPairs(result);
    setCount(1)
    console.log("result: ", result);
    const { data } = await axios.post("/gcp", { input : JSON.stringify(result) });
    console.log("data: ", data);
  }

  return (
    <div className="make-pair-button">
      <Button onClick={() => go()} variant="primary">Make pairs</Button>
    </div>
  );
};

export default Btn;
