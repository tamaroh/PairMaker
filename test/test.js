const makePair = require("./MakePair_copy");
const { assignedStudents, countPairMember, checkPairs } = require("./utility");
const data10 = require("./testData/testdata_10")(); //10名のリスト
const data13 = require("./testData/testdata_13")(); //13名のリスト
const data15 = require("./testData/testdata_15")(); //15名のリスト
const data17 = require("./testData/testdata_17")(); //17名のリスト
const data20 = require("./testData/testdata_20")(); //20名のリスト
const data25 = require("./testData/testdata_25")(); //25名のリスト
const data35 = require("./testData/testdata_35")(); //35名のリスト
const data50 = require("./testData/testdata_50")(); //50名のリスト

var assert = require("assert");

describe("MakePair", function () {
  describe("test data", () => {
    it("data10 contains 10people", () => {
      assert.equal(data10.length, 10);
    });
    it("data13 contains 13people", () => {
      assert.equal(data13.length, 13);
    });
    it("data15 contains 15people", () => {
      assert.equal(data15.length, 15);
    });
    it("data17 contains 17people", () => {
      assert.equal(data17.length, 17);
    });
    it("data20 contains 20people", () => {
      assert.equal(data20.length, 20);
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
  const testResult13 = makePair(20, data13);
  it("is 20days", () => {
    assert.equal(testResult13.length, 20);
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
  it("pairs assigned all 13 students", () => {
    const testResult13 = makePair(20, data13);
    const result = assignedStudents(testResult13);
    assert.equal(new Set(result[0]).size, 13);
    assert.equal(new Set(result[1]).size, 13);
    assert.equal(new Set(result[2]).size, 13);
    assert.equal(new Set(result[3]).size, 13);
    assert.equal(new Set(result[4]).size, 13);
    assert.equal(new Set(result[5]).size, 13);
    assert.equal(new Set(result[6]).size, 13);
    assert.equal(new Set(result[7]).size, 13);
    assert.equal(new Set(result[8]).size, 13);
    assert.equal(new Set(result[9]).size, 13);
    assert.equal(new Set(result[10]).size, 13);
    assert.equal(new Set(result[11]).size, 13);
    assert.equal(new Set(result[12]).size, 13);
    assert.equal(new Set(result[13]).size, 13);
    assert.equal(new Set(result[14]).size, 13);
    assert.equal(new Set(result[15]).size, 13);
    assert.equal(new Set(result[16]).size, 13);
    assert.equal(new Set(result[17]).size, 13);
    assert.equal(new Set(result[18]).size, 13);
    assert.equal(new Set(result[19]).size, 13);
  });
  it("pairs assigned all 50 students", () => {
    const testResult50 = makePair(20, data50);
    const result = assignedStudents(testResult50);
    assert.equal(new Set(result[0]).size, 50);
    assert.equal(new Set(result[1]).size, 50);
    assert.equal(new Set(result[2]).size, 50);
    assert.equal(new Set(result[3]).size, 50);
    assert.equal(new Set(result[4]).size, 50);
    assert.equal(new Set(result[5]).size, 50);
    assert.equal(new Set(result[6]).size, 50);
    assert.equal(new Set(result[7]).size, 50);
    assert.equal(new Set(result[8]).size, 50);
    assert.equal(new Set(result[9]).size, 50);
    assert.equal(new Set(result[10]).size, 50);
    assert.equal(new Set(result[11]).size, 50);
    assert.equal(new Set(result[12]).size, 50);
    assert.equal(new Set(result[13]).size, 50);
    assert.equal(new Set(result[14]).size, 50);
    assert.equal(new Set(result[15]).size, 50);
    assert.equal(new Set(result[16]).size, 50);
    assert.equal(new Set(result[17]).size, 50);
    assert.equal(new Set(result[18]).size, 50);
    assert.equal(new Set(result[19]).size, 50);
  });
  describe("paired partner", () => {
    it("10 students hasn't paired with any paticuler partner more than 4 times", () => {
      async function repeatFunc() {
        let resultOf10People = await makePair(10, data10);
        let result = checkPairs(countPairMember(resultOf10People));
        if (result === true) {
          return resultOf10People;
        } else {
          repeatFunc();
        }
      }
      assert.equal(checkPairs(countPairMember(repeatFunc())), true);
    });
    it("13 students hasn't paired with any paticuler partner more than 4 times", () => {
      async function repeatFunc() {
        let resultOf13People = await makePair(13, data13);
        let result = checkPairs(countPairMember(resultOf13People));
        if (result === true) {
          return resultOf13People;
        } else {
          repeatFunc();
        }
      }
      assert.equal(checkPairs(countPairMember(repeatFunc())), true);
    });
    it("15 students hasn't paired with any paticuler partner more than 4 times", () => {
      async function repeatFunc() {
        let resultOf15People = await makePair(15, data15);
        let result = checkPairs(countPairMember(resultOf15People));
        if (result === true) {
          return resultOf15People;
        } else {
          repeatFunc();
        }
      }
      assert.equal(checkPairs(countPairMember(repeatFunc())), true);
    });
  });
});
