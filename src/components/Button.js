import React from "react";
import axios from "axios";

const Button = (props) => {
  let { state, setDisplayState, pairState, setPairState } = props;

  async function go() {
    let array = [];
    let pairStateCopy = [];

    //配列をシャッフルする関数
    function shuffle() {
      // console.log(state);
      for (let i = state.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state[i], state[j]] = [state[j], state[i]];
      }
      setDisplayState(true);
      // console.log(state);
      return state;
    }

    //シャッフルしてできた配列をペアごとに分けて新しく用意した配列に追加
    function pairSet() {
      while (state.length > 1) {
        array.push(state.splice(0, 2));
      }
      if (state.length === 1) {
        array.push([state.shift()]);
      }
      //コピーした空の配列
      pairStateCopy = pairState.slice(0);

      //取得した値をコピーした空の配列に追加
      array.map((pair) => {
        pairStateCopy.push(pair.join(" & "));
      });
      setPairState(pairStateCopy);
      // console.log(pairStateCopy);
      return pairState;
    }

    shuffle();
    pairSet();

    console.log("pairStatecopy", pairStateCopy);

    const { data } = await axios.post("/gcp", { input : JSON.stringify(pairStateCopy) });
    console.log(data);
  }

  return (
    <div className="make-pair-button">
      <button onClick={() => go()}>ペアを組む</button>
    </div>
  );
};

export default Button;
