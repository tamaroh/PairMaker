const makePair = require("./MakePair_copy");
const {
  countPairMember,
  checkPairs,
  assignedStudents,
} = require("./testUtility");
const data15 = require("./testData/testdata_15")(); //15名のリスト
const data25 = require("./testData/testdata_25")(); //25名のリスト
const data35 = require("./testData/testdata_35")(); //35名のリスト
const data50 = require("./testData/testdata_50")(); //50名のリスト

var assert = require("assert");

describe("MakePair", function () {
  describe("test data", () => {
    it("data15 contains 15people", () => {
      assert.equal(data15.length, 15);
    });
    it("data25 contains 25people", () => {
      assert.equal(data25.length, 25);
    });
    it("data35 contains 35people", () => {
      assert.equal(data35.length, 35);
    });
    it("data50 contains 50people", () => {
      assert.equal(data50.length, 50);
    });
  });
});
describe("created days", () => {
  const testResult15 = makePair(20, data15);
  it("is 20days", () => {
    assert.equal(testResult15.length, 20);
  });
  const testResult25 = makePair(20, data25);
  it("is 20days", () => {
    assert.equal(testResult25.length, 20);
  });
  const testResult35 = makePair(20, data35);
  it("is 20days", () => {
    assert.equal(testResult35.length, 20);
  });
  const testResult50 = makePair(20, data50);
  it("is 20days", () => {
    assert.equal(testResult50.length, 20);
  });
});
describe("created pairs ", () => {
  it("pairs assigned all students", () => {
    const testResult15 = makePair(20, data15);
    const result = assignedStudents(testResult15);
    // console.log("result: ", result)
    assert.equal(new Set(result[0]).size, 15);
    assert.equal(new Set(result[1]).size, 15);
    assert.equal(new Set(result[2]).size, 15);
    assert.equal(new Set(result[3]).size, 15);
    assert.equal(new Set(result[4]).size, 15);
    assert.equal(new Set(result[5]).size, 15);
    assert.equal(new Set(result[6]).size, 15);
    assert.equal(new Set(result[7]).size, 15);
    assert.equal(new Set(result[8]).size, 15);
    assert.equal(new Set(result[9]).size, 15);
    assert.equal(new Set(result[10]).size, 15);
    assert.equal(new Set(result[11]).size, 15);
    assert.equal(new Set(result[12]).size, 15);
    assert.equal(new Set(result[13]).size, 15);
    assert.equal(new Set(result[14]).size, 15);
    assert.equal(new Set(result[15]).size, 15);
    assert.equal(new Set(result[16]).size, 15);
    assert.equal(new Set(result[17]).size, 15);
    assert.equal(new Set(result[18]).size, 15);
    assert.equal(new Set(result[19]).size, 15);
  });
});

// testResult15.forEach((element, index) => {
//   let nameCotainer = element.map((e) => {
//     return e.split("&");
//   });
//   let list = [];
//   for (const elem of nameCotainer) {
//     list = list.concat(elem);
//   }
//   console.log(
//     `${index + 1}日目のペアには15名の名まえが記載されている: `,
//     test(new Set(list).size, 15)
//   );
// });

// console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult15)), true));

// console.log("/////")
// console.log(
//   "元のデータには25名分の名前が記載されている: ",
//   test(data25.length, 25)
// );
// console.log(
//   "20日分のペアが出来ている: ",
//   test(testResult25.length, 20)
// );

// testResult25.forEach((element, index) => {
//   let nameCotainer = element.map((e) => {
//     return e.split("&");
//   });
//   let list = [];
//   for (const elem of nameCotainer) {
//     list = list.concat(elem);
//   }
//   console.log(
//     `${index + 1}日目のペアには25名の名まえが記載されている: `,
//     test(new Set(list).size, 25)
//   );
// });

// console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult25)), true));

// console.log("/////")
// console.log(
//   "元のデータには35名分の名前が記載されている: ",
//   test(data35.length, 35)
// );
// console.log(
//   "20日分のペアが出来ている: ",
//   test(testResult35.length, 20)
// );

// testResult35.forEach((element, index) => {
//   let nameCotainer = element.map((e) => {
//     return e.split("&");
//   });
//   let list = [];
//   for (const elem of nameCotainer) {
//     list = list.concat(elem);
//   }
//   console.log(
//     `${index + 1}日目のペアには35名の名まえが記載されている: `,
//     test(new Set(list).size, 35)
//   );
// });

// console.log("Student hasn't paired with any paticuler partner: ", test(checkPairs(countPairMember(testResult35)), true));
