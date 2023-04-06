import React from "react";
import MakePair from "./MakePair";
import axios from "axios";
import Button from "react-bootstrap/Button"
import "./components_styles/Btn.css"


const Btn = (props) => {
  let { students, setCount, setPairs, sheetId, setMessage } = props;

  //配列をシャッフルする関数
  async function go() {
    const result = MakePair(20, students);//関数MakePairの第一引数で作成日数を決定
    setPairs(result);
    setCount(1)
    const { data } = await axios.post("/gcp", { input_pairs : JSON.stringify(result), input_sheetId : JSON.stringify(sheetId) });
    setMessage(data)
    console.log("Google sheet update: ", data)
  }

  return (
    <div className="make-pair-button">
      <Button onClick={() => go()} variant="primary">Make pairs</Button>
    </div>
  );
};

export default Btn;
