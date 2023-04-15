const makePair = require("./MakePair_copy");
const {test, countPairMember, checkPairs} = require("./test_utility");
const data25 = require("./testdata_25")(); //25名のリスト
const testResult25 = makePair(20, data25);

console.log(
  "元のデータには25名分の名前が記載されている: ",
  test(data25.length, 25)
);
console.log(
  "20日分のペアが出来ている: ",
  test(testResult25.length, 20)
);

testResult25.forEach((element, index) => {
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = [];
  for (const elem of nameCotainer) {
    list = list.concat(elem);
  }
  console.log(
    `${index + 1}日目のペアには25名の名まえが記載されている: `,
    test(new Set(list).size, 25)
  );
});

console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult25)), true));
