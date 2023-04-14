const data = require("./testdata");
const utility = require("../utility");
const testResult = utility.makePair(20, data());

const test = (expected, actual) => {
  return JSON.stringify(expected) === JSON.stringify(actual) ? "OK" : "Failed";
};

console.log(
  "元のデータには50名分の名前が記載されている: ",
  test(data().length, 50)
);
console.log("20日分のペアが出来ている: ", test(testResult.length, 20));
testResult.forEach((element, index) => {
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = [];
  for (const elem of nameCotainer) {
    list = list.concat(elem);
  }
  console.log(
    `${index + 1}日目のペアには50名の名まえが記載されている: `,
    test(new Set(list).size, 50)
  );
});

console.log("ペアの結果を一覧にして出力する");
const makeList = () => {
  //dataから名簿を作製する
  //   let nameData = data();
  let nameList = {};
  //   nameData.forEach((e) => (nameList[e] = {}));
  //   console.log("nameList: ", nameList)

  //testResult を走査する
  testResult.forEach((element) => {
    let nameCotainer = element.map((e) => {
      return e.split("&");
    });
    // console.log("nameContainer: ", nameCotainer);
    nameCotainer.forEach((element) => {
      //   console.log("element: ", element);
      element.forEach((elem, i) => {
        // console.log("elem: ", elem);
        for (let i = 0; i < element.length; i++) {
          if (element[i] !== elem && nameList[elem] === undefined) {
            nameList[elem] = {};
          }
          if (element[i] !== elem && nameList[elem][element[i]] === undefined) {
            nameList[elem][element[i]] = 0;
          } else {
            nameList[elem][element[i]] += 1;
          }
        }
      });
    });
  });
  console.log("nameList: ", nameList);
};
makeList();
