const MakePair = (days, array) => {
  const history = [];
  const unpaired = new Map();
  array.forEach((element, index, self) => {
    const set = new Set(self);
    set.delete(element);
    unpaired.set(element, set);
  });

  const getRandomElement = (set) => {
    const array = (Array.isArray(set)) ? set : Array.from(set);
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  const isPaired = (person1, person2) => {
    return !(unpaired.get(person1).has(person2));
  }
  const createPairs = (array) => {
    const pairs = [];
    const tempSet = new Set(array);
    let isDoubled = false;
    let person1, person2;
    while (tempSet.size > 1) {
      person1 = getRandomElement(tempSet);
      const pair = [person1];
      tempSet.delete(person1);
      const target = Array.from(tempSet).filter(person => !(isPaired(person1, person)));
      if (target.length > 0) {
        person2 = getRandomElement(target);
      } else {
        person2 = getRandomElement(tempSet);
        isDoubled = true;
      }
      // while (isPaired(person1, person2)) {
      //   person2 = getRandomElement(tempSet);
      // }
      pair.push(person2);
      tempSet.delete(person2);
      pairs.push(pair);
    }
    if (tempSet.size === 1) {
      pairs[0].push(tempSet.values().next().value);
    }
    if (!isDoubled) {
      unpaired.get(person1).delete(person2);
      unpaired.get(person2).delete(person1);
      history.push(pairs);
    }
    return pairs;
  }
  while (history.length < days) {
    createPairs(array);
  }
  return history;
}

export default MakePair;
//test
// const sampleArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "い",
//   "ろ",
//   "は",
//   "に",
//   "ほ",

// ]
// // console.log(makePair(20, sampleArray));

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
// test(makePair(2, sampleArray));