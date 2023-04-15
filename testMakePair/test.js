const makePair = require("./MakePair_copy");
const {test, countPairMember, checkPairs} = require("./test_utility");
const data15 = require("./testdata_15")(); //15名のリスト
const data25 = require("./testdata_25")(); //25名のリスト
const data35 = require("./testdata_35")(); //35名のリスト
const data50 = require("./testdata_50")(); //50名のリスト
const testResult15 = makePair(20, data15);
const testResult25 = makePair(20, data25);
const testResult35 = makePair(20, data35);
const testResult50 = makePair(20, data50);



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

console.log("/////")
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

console.log("/////")
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
