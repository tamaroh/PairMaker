const makePair = require("./MakePair_copy");
const utility = require("./test_utility");
const data15 = require("./testdata_15"); //15名のリスト
const testResult15 = makePair(20, data15());

console.log(
  "元のデータには15名分の名前が記載されている: ",
  utility.test(data15().length, 15)
);
console.log(
  "20日分のペアが出来ている: ",
  utility.test(testResult15.length, 20)
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
    utility.test(new Set(list).size, 15)
  );
});



const makeList = (list) => {
  // console.log("list: ", list);
  let nameList = {};
  let container = [];
  for (let i = 0; i < list.length; i++) {
    let group = [];
    for (let k = 0; k < list[i].length; k++) {
      // console.log("list[i][k]", list[i][k].split("&"));
      group.push(list[i][k].split("&"));
    }
    container.push(group);
  }
  // console.log("container: ", container)

  for (let i = 0; i < container.length; i++) {
    // console.log("container[i]: ", container[i])

    for (let k = 0; k < container[i].length; k++) {
      // console.log("group: container[i][k]: ", container[i][k]);

      //1グループの組み合わせを記録する
      for (let j = 0; j < container[i][k].length; j++) {
        // console.log("?: ",container[i][k][j] )
        if (nameList[container[i][k][j].trim()] === undefined) {
          nameList[container[i][k][j].trim()] = {};
        }
        for (let l = 0; l < container[i][k].length; l++) {
          // console.log("container[i][k][l].trim(): ", container[i][k][l].trim());
          if (
            container[i][k][j].trim() !== container[i][k][l].trim() &&
            nameList[container[i][k][j].trim()][container[i][k][l].trim()] ===
              undefined
          ) {
            nameList[container[i][k][j].trim()][container[i][k][l].trim()] = 0;
          }
          if (container[i][k][j].trim() !== container[i][k][l].trim()) {
            nameList[container[i][k][j].trim()][container[i][k][l].trim()] += 1;
          }
        }
      }
    }
  }
  // console.log("nameList: ", nameList);
  return nameList;
};

const result = Object.values(makeList(testResult15));
// console.log("result: ", result)
for(let i = 0; i < result.length; i++){
  console.log(`${i}: ${Object.values(result[i])}`)
  console.log(Object.values(result[i]).filter(e => e > 3))
  console.log(`Total: ${Object.values(result[i]).reduce((accum, current) => accum + current)}`)
  console.log("-----")
}
