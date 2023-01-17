import React from "react";

const Button = (props) => {
  let { state, setDisplayState, pairState, setPairState } = props;

  //配列をシャッフルする関数

  function go() {
    let array = [];
    function shuffle() {
      // console.log(state);
      for (let i = state.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state[i], state[j]] = [state[j], state[i]];
      }
      setDisplayState(true);
      console.log(state);
      return state;
    }

    //シャッフルしてできた配列をペアごとに分けて新しく用意した配列に追加
    function pairSet() {
      while (state.length > 1) {
        array.push(state.splice(0, 2));
      }
      // トータル人数が奇数だった場合に奇数人数のペアも作成
      if (state.length === 1) {
        array.push([state.shift()]);
        let lastArray = array.pop();
        // console.log(lastArray);
        array[array.length - 1].push(lastArray);
        console.log(array);
      }

      //コピーした空の配列
      let pairStateCopy = pairState.slice(0);

      console.log(array);
      //取得した値をコピーした空の配列に追加
      if (pairStateCopy.length % 2 === 1) {
        pairStateCopy[pairStateCopy.length - 2].push(
          pairStateCopy[pairStateCopy.length - 1].join(" & ")
        );
      }
      array.map((pair) => {
        pairStateCopy.push(pair.join(" & "));
      });

      setPairState(pairStateCopy);
      console.log(pairStateCopy);

      return pairState;
    }

    shuffle();
    pairSet();
  }

  return (
    <div className="make-pair-button">
      <button onClick={() => go()}>ペアを組む</button>
    </div>
  );
};

export default Button;
