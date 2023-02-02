import React from "react";
import axios from "axios";

const Button = (props) => {
  let { state, setDisplayState, pairState, setPairState } = props;

  async function go() {
    let array = [];
    let pairStateCopy = [];

    //全体の組み合わせを作成
    //もしペアが選ばれたときに、重複したペアパターンも削除
    //指定した回数だけloopする
    //もし奇数だった場合、ペアで選ばれなかった人を探してその人を最後のペアに追加する

    const stateCopy = state;
    let pairSet = [];
    let result2;
    function shuffle() {
      if (state.length === 0) {
        return state;
      }
      let result = [];
      for (let i = 0; i < state.length; i++) {
        for (let j = stateCopy.length - 1; j >= 0; j--) {
          result.push(state[i], stateCopy[j]);
        }
      }
      while (result.length > 1) {
        result2 = result.splice(0, 2).sort();
        pairSet.push(result2);
      }
      console.log(pairSet);
    }

    function deleateSamepair() {
      const newArray = [];
      pairSet
        .filter((elem) => {
          return elem[0] !== elem[1];
        })
        .forEach((elem) => {
          if (!newArray.includes(String(elem))) {
            newArray.push(String(elem));
          }
        });
      console.log(newArray);
    }

    shuffle();
    deleateSamepair();
    // //配列をシャッフルする関数
    // function shuffle() {
    //   if (state.length === 0) {
    //     return state;
    //   }
    //   for (let i = state.length - 1; i >= 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [state[i], state[j]] = [state[j], state[i]];
    //   }
    //   setDisplayState(true);
    //   console.log(state);
    //   return state;
    // }

    // //シャッフルしてできた配列をペアごとに分けて新しく用意した配列に追加
    // function pairSet() {
    //   while (state.length > 1) {
    //     array.push(state.splice(0, 2));
    //   }
    //   // トータル人数が奇数だった場合に奇数人数のペアも作成
    //   if (state.length === 1) {
    //     // debugger;
    //     array.push(state);
    //     let lastArray = String(array.pop());
    //     array[array.length - 1].push(lastArray);
    //   }

    //   //コピーした空の配列
    //   pairStateCopy = pairState.slice(0);

    //   console.log(array);
    //   //取得した値をコピーした空の配列に追加
    //   // if (pairStateCopy.length % 2 === 1) {
    //   //   pairStateCopy[pairStateCopy.length - 2].push(
    //   //     pairStateCopy[pairStateCopy.length - 1].join(" & ")
    //   //   );
    //   // }
    //   array.map((pair) => {
    //     pairStateCopy.push(pair.join(" , "));
    //   });
    //   setPairState(pairStateCopy);
    //   return pairState;
    // }

    // shuffle();
    // pairSet();

    // console.log("pairStatecopy", pairStateCopy);

    const { data } = await axios.post("/gcp", {
      input: JSON.stringify(pairState),
    });
    console.log(data);
  }

  return (
    <div className="make-pair-button">
      <button onClick={() => go()}>ペアを組む</button>
    </div>
  );
};

export default Button;
