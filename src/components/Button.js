import React from "react";

const Button = (props) => {
  let { students, setCount, pairs, setPairs } = props;

  //配列をシャッフルする関数

  function go() {
    let array = [];
    function shuffle() {
      if (students.length === 0) {
        return students;
      }
      for (let i = students.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
      }
      setCount(true);
      console.log(students);
      return students;
    }

    //シャッフルしてできた配列をペアごとに分けて新しく用意した配列に追加
    function pairSet() {
      while (students.length > 1) {
        array.push(students.splice(0, 2));
      }
      // トータル人数が奇数だった場合に奇数人数のペアも作成
      if (students.length === 1) {
        array.push([students.shift()]);
        let lastArray = array.pop();
        array[array.length - 1].push(lastArray);
      }

      //コピーした空の配列
      let pairsCopy = pairs.slice(0);

      console.log(array);
      //取得した値をコピーした空の配列に追加
      // if (pairsCopy.length % 2 === 1) {
      //   pairsCopy[pairsCopy.length - 2].push(
      //     pairsCopy[pairsCopy.length - 1].join(" & ")
      //   );
      // }
      array.forEach((pair) => {
        pairsCopy.push(pair.join(" & "));
      });

      setPairs(pairsCopy);
      console.log(pairsCopy);

      return pairs;
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
