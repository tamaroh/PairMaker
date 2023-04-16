
/**
 * Get alphabet for writing range 
 *
 * @param {number} num - The number of pairs 
 * @return {string} - A set of alphabet
 */
const setChar = function (num) { 
  let result = "";
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (num / 26 > 1) {
    //26 以上の場合にGoogle Spread Sheetの行番号指定は"AA", "BA"など二つのアルファベットが組み合わせられて行われる
    //26*26のアルファベットを組み合わせて676ペアまで書き込みを対応できるようにする
    result = alphabet[Math.floor(num / 26)-1] + alphabet[(num % 26)];
  } else {
    result = alphabet[num]; 
  }
  return result;
};

/**
 * ペアの結果、対になった相手との回数を一覧にして出力する
 *
 * @param {list} array - makePairによって返される値
 * @return {object} object
 */
const countPairMember = (list) => {
  // console.log("list: ", list);
  let nameList = {};
  let container = [];
  for (let i = 0; i < list.length; i++) {
    let group = [];
    for (let k = 0; k < list[i].length; k++) {
      // console.log("list[i][k]", list[i][k].split("&"));
      group.push(list[i][k].split("&"));
    }
    container.push(group); //コンテナには各日毎の配列にペアが配列で格納される
  }
  // console.log("container: ", container)

  //コンテナから各メンバー毎にペアとなったメンバーとその回数をオブジェクトで記録する
  for (let i = 0; i < container.length; i++) {
    // console.log("container[i]: ", container[i])
    let dailyList = container[i];
    for (let k = 0; k < dailyList.length; k++) {
      // console.log("group: dailyList[k]: ", dailyList[k]);
      let dailyPair = dailyList[k];

      dailyPair = dailyPair.map((e) => e.trim()); //ペアの配列の各要素から不要なスペースを削除しておく
      for (let j = 0; j < dailyPair.length; j++) {
        if (nameList[dailyPair[j]] === undefined) {
          nameList[dailyPair[j]] = {};
        }
        for (let l = 0; l < dailyPair.length; l++) {
          // console.log("dailyPair[l]: ", dailyPair[l]);
          if (
            dailyPair[j] !== dailyPair[l] &&
            nameList[dailyPair[j]][dailyPair[l]] === undefined
          ) {
            nameList[dailyPair[j]][dailyPair[l]] = 0;
          }
          if (dailyPair[j] !== dailyPair[l]) {
            nameList[dailyPair[j]][dailyPair[l]] += 1;
          }
        }
      }
    }
  }
  // console.log("nameList: ", nameList);
  return nameList;
};

/**
 * あるメンバーが他のメンバーと3回より多くペアを組んでいないかをチェックする
 *
 * @param {list} object - countPairMemberの返り値であるペアのリスト
 * @return {boolean} boolean
 */
function checkPairs(list) {
  let isValid = true;

  const student = Object.keys(list);
  const pairs = Object.values(list);

  for (let i = 0; i < pairs.length; i++) {
    // console.log(`${student[i]}: ${Object.values(pairs[i])}`);

    if (
      Object.values(pairs[i]).length !==
      Object.values(pairs[i]).filter((e) => e < 4).length
    ) {
      // console.log(`${student[i]} has paired with someone more than 3`);
      // console.log(`---`);
      // console.log(`${student[i]}: ${Object.values(pairs[i])}`);

      isValid = false;
    }
  }
  return isValid;
}



module.exports = { setChar, countPairMember, checkPairs };
