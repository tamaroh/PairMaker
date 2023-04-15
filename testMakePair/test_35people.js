const makePair = require("./MakePair_copy");
const {test, countPairMember, checkPairs} = require("./test_utility");
const data35 = require("./testdata_35")(); //35名のリスト
const testResult35 = makePair(20, data35);

console.log(
  "元のデータには35名分の名前が記載されている: ",
  test(data35.length, 35)
);
console.log(
  "20日分のペアが出来ている: ",
  test(testResult35.length, 20)
);

testResult35.forEach((element, index) => {
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = [];
  for (const elem of nameCotainer) {
    list = list.concat(elem);
  }
  console.log(
    `${index + 1}日目のペアには35名の名まえが記載されている: `,
    test(new Set(list).size, 35)
  );
});

console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult35)), true));
