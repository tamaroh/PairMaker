/**
 * 日ごとにペアにアサイン済みの生徒のリストを作成する
 *
 * @param {list} array - makePairによって返される値
 * @return {wholeList} 日ごとにペアにアサインされた生徒の名まえを格納した配列
 */
function assignedStudents(list) {
  let wholeList = [];
  list.forEach((pairs) => {
    let arrayOfPair = pairs.map((pair) => {
      return pair.split("&");
    });
    // console.log("arrayOfPair: ", arrayOfPair)
    let dailyList = [];
    for (const pair of arrayOfPair) {
      dailyList = dailyList.concat(pair);
    }
    wholeList.push(dailyList);
  });
  // console.log("wholeList: ", wholeList)
  return wholeList;
}
//

module.exports = {
  assignedStudents,
};
