const data = require("./testdata");
const utility = require("../utility");
const testResult = utility.makePair(20, data());

const test = (expected, actual) => {
  return JSON.stringify(expected) === JSON.stringify(actual) ? "OK" : "Failed";
};

console.log("元のデータには50名分の名前が記載されている: ", test(data().length, 50))
console.log("20日分のペアが出来ている: ", test(testResult.length, 20));
testResult.forEach((element, index)=>{
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = []; 
  for(const elem of nameCotainer){
    list = list.concat(elem); 
  }
  console.log(`${index+1}日目のペアには50名の名まえが記載されている: `, test(new Set(list).size, 50),); 
});

