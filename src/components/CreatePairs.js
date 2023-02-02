/**
 * 
 * 履歴を事前に作成する。
 * {
 *  num: [
 *  [], [], []...
 * ],
 *  num2: [
 *  [],[],[]... 
 * ]
 * }
 * 配列を受け取り、
 * 一時リストを複製で作成する。
 * 一時リストからランダムな人をひとつ選ぶ。
 * 履歴の中でその一人とペアになってないもう一人をランダムに選び、
 * ペアを配列に入れる。
 * 選んだ二人は一時リストから削除する。
 * 一時リストが2人未満になるまでくりかえす。
 * 最後に一人余ったら、その人とペアになっていない人がいるペアに追加する。
 * ペア配列ができたら、それとnunmを履歴に追加する。
 * 
 */
const makePair = (days, array) => {
  const history = [];
  const unpaired = new Map();
  array.forEach((element, index, self) => {
    const set = new Set(self);
    set.delete(element);
    unpaired.set(element, set);
  });

  const getRandomElement = (set) => {
    const array = Array.from(set);
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  const isunPaired = (person1, person2) => {
    return unpaired.get(person1).has(person2);
  }
  const createPairs = (array) => {
    const pairs = [];
    const tempSet = new Set(array);
    while (tempSet.size > 2) {
      const person1 = getRandomElement(tempSet);
      const pair = [person1];
      tempSet.delete(person1);
      let person2 = getRandomElement(tempSet);
      while (!(isunPaired(person1, person2))) {
        person2 = getRandomElement(tempSet);
      }
      pair.push(person2);
      tempSet.delete(person2);
      unpaired.get(person1).delete(person2);
      unpaired.get(person2).delete(person1);
      pairs.push(pair);
    }
    if (tempSet.size === 1) {
      pairs[0].push(tempSet.values().next().value);
    }
    history.push(pairs);
    return pairs;
  }
  for (let i = 0; i < days; i++) {
    createPairs(array);
  }
  return history;
}

//test
const sampleArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  // "h",
  // "i",
  // "j",
  // "k",
  // "l",
  // "m",
  // "n",
  // "o",
  // "p",
  // "q",
  // "r",
  // "s",
  // "t",
  // "u",
  // "v",
  // "w",
  // "x",
  // "y",
  // "z",
  // "い",
  // "ろ",
  // "は",
  // "に",
  // "ほ",

]
console.log(makePair(4, sampleArray));