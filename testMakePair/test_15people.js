const makePair = require("./MakePair_copy");
const {test, countPairMember, checkPairs} = require("./test_utility");
const data15 = require("./testdata_15")(); //15名のリスト
const testResult15 = makePair(20, data15);

console.log(
  "元のデータには15名分の名前が記載されている: ",
  test(data15.length, 15)
);
console.log(
  "20日分のペアが出来ている: ",
  test(testResult15.length, 20)
);

testResult15.forEach((element, index) => {
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = [];
  for (const elem of nameCotainer) {
    list = list.concat(elem);
  }
  console.log(
    `${index + 1}日目のペアには15名の名まえが記載されている: `,
    test(new Set(list).size, 15)
  );
});

console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult15)), true));
