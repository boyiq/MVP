import _ from 'underscore';

const generateRandomCards = (array, mode)=>{
  let unfamiliar = [];
  let familiar = [];
  let mastered = [];
  let result = [];

  array.forEach((element)=>{
    if (element.familiarity === 'Unfamiliar') {
      unfamiliar.push(element);
    } else if (element.familiarity === 'Familiar') {
      familiar.push(element);
    } else if (element.familiarity === 'Mastered') {
      mastered.push(element);
    }
  })

  if (mode === 'grind' && array.length <= 3) {
    return array;
  } else if (mode === 'review' && array.length <= 5) {
    return array;
  } else if (mode === 'grind') {
    let newUnfamiliar = _.sample(unfamiliar, 2);
    let newFamiliar = _.sample(familiar);
    result = newUnfamiliar.concat(newFamiliar);
  } else if (mode === 'review') {
    let newUnfamiliar = _.sample(unfamiliar, 2);
    let newFamiliar = _.sample(familiar, 2);
    let newMastered = _.sample(mastered, 1);
    result = newUnfamiliar.concat(newFamiliar).concat(newMastered);
  }
  let shuffledResult = _.shuffle(result);
  return shuffledResult;
}

export default generateRandomCards;