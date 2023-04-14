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
        let pair = person1;
        tempSet.delete(person1);
        const target = Array.from(tempSet).filter(person => !(isPaired(person1, person)));
        if (target.length > 0) {
          person2 = getRandomElement(target);
        } else {
          person2 = getRandomElement(tempSet);
          isDoubled = true;
        }
        pair += ` & ${person2}`;
        tempSet.delete(person2);
        unpaired.get(person1).delete(person2);
        if (unpaired.get(person1).size === 0) {
          unpaired.delete(person1);
          const newSet = new Set(array);
          newSet.delete(person1);
          unpaired.set(person1, newSet);
        }
        unpaired.get(person2).delete(person1);
        pairs.push(pair);
      }
      if (tempSet.size === 1) {
        pairs[0] += ` & ${tempSet.values().next().value}`;
      }
      if (!isDoubled) {
        history.push(pairs);
      }
      return pairs;
    }
    while (history.length < days) {
      createPairs(array);
    }
    return history;
  }
  
  module.exports =  MakePair;
  