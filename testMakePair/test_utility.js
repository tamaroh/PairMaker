/**
 * Test function
 *
 * @param {expected}
 * @param {actual}
 * @return {boolean}
 */
const test = (expected, actual) => {
  return JSON.stringify(expected) === JSON.stringify(actual) ? "OK" : "Failed";
};

/**
 * ペアの結果、対になった相手との回数を一覧にして出力する
 *
 * @param {list} string - Two-dimensional-array
 * @return {object} object
 */

const makeList = (list) => {
  let nameList = {};
  list.forEach((element) => {
    let nameCotainer = element.map((e) => {
      return e.split("&");
    });
    nameCotainer.forEach((element) => {
      element.forEach((elem, i) => {
        for (let i = 0; i < element.length; i++) {
          if (element[i] !== elem && nameList[elem] === undefined) {
            nameList[elem] = {};
          }
          if (element[i] !== elem && nameList[elem][element[i]] === undefined) {
            nameList[elem][element[i]] = 0;
          }
          if (element[i] !== elem) {
            nameList[elem][element[i]] += 1;
          }
        }
      });
    });
  });
  return nameList;
};

module.exports = { test, makeList };
