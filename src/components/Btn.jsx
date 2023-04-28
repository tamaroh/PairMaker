import React from "react";
import MakePair from "./MakePair";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./components_styles/Btn.css";
import { countPairMember, checkPairs } from "./utility";

const Btn = (props) => {
  let { students, setCount, setPairs, sheetId, setMessage } = props;

  //与えられた名前からペアを作成
  //ペア作成の結果特定の相手と4回以上ペアとなるパターンが出現した場合にそのパターンを検出できなくなるまで自動でmakePairが再起動される
  async function getIdealPair() {
    const resultOfMakepair = await MakePair(20, students); //MakePair第一引数でペア作成日数を指定
    let result = checkPairs(countPairMember(resultOfMakepair));
    if (result === true) {
      setPairs(resultOfMakepair);
      setCount(1);
      const { data } = await axios.post("/gcp", {
        input_pairs: JSON.stringify(resultOfMakepair),
        input_sheetId: JSON.stringify(sheetId),
      });
      setMessage(data);
      console.log("Google sheet update: ", data);
      return;
    } else {
      getIdealPair();
    }
  }

  return (
    <div className="make-pair-button">
      <Button onClick={() => getIdealPair()} variant="primary">
        Make pairs
      </Button>
    </div>
  );
};

export default Btn;
