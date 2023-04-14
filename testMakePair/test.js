const data = require("./testdata");
const makepair = require("./mockMakePair");
const testResult = makepair(20, data());

const test = (expected, actual) => {
  return JSON.stringify(expected) === JSON.stringify(actual) ? "OK" : "Failed";
};

console.log("元のデータには50名分の名前が記載されている: ", test(data().length, 50))
console.log("20日分のペアが出来ている: ", test(testResult.length, 20));
testResult.forEach((element)=>{
  let nameCotainer = element.map((e) => {
    return e.split("&");
  });
  let list = []; 
  for(const elem of nameCotainer){
    list = list.concat(elem); 
  }
  console.log("1日文のペアには50名の名まえが記載されている: ", test(new Set(list).size, 50),); 
});

// function checkDepMember(arr) {
//   let container = {};
//   for (const elem of arr) {
//     if (container[elem] === undefined) {
//       container[elem] = 0;
//     }
//     container[elem]++;
//   }
//   for (const key in container) {
//     if (container[key] > 1) {
//       return false;
//     }
//   }
//   return true;
// }

// //重複ペアの有無をテストする関数
// function checkDepPair(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (i !== k) {
//         if (JSON.stringify(arr[i]) === JSON.stringify(arr[k])) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// //テストを実行する関数
// function test(target) {
//   console.log(target);
//   for (const elem of target) {
//     console.log("checkDepMember: ", checkDepMember(elem));
//     console.log("checkDepPair: ", checkDepPair(elem));
//   }
// }
// test(MakePair(20, sampleArray));
