
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
module.exports = { setChar };
