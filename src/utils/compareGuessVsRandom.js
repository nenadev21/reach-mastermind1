//Jose's try

export function compareGuessVsRandom2(values, random) {
  // exact values
  const exactMatches = [];
  const missingValues = []; // accumalator for unmatched values
  const missingRandom = []; // accumalator for unmatched random values
  for (let i = 0; i < values.length; i++) {
    if (values[i] === random[i]) {
      exactMatches.push(values[i]);
    } else {
      missingValues.push(values[i]);
      missingRandom.push(random[i]);
    }
  }

  // matches values
  const matchesByValue = [];
  for (let i = 0; i < missingValues.length; i++) {
    const randomIndex = missingRandom.findIndex((v) => v === missingValues[i]);
    // if random values contains the current value, remove the value from random values and save the value in matchesByValue
    if (randomIndex >= 0) {
      matchesByValue.push(missingValues[i]);
      missingRandom.splice(randomIndex, 1);
    }
  }

  console.log(exactMatches, matchesByValue);
  // if all checks pass, the arrays are a match
  return {
    // match: exactMatches.length === random.length,
    // exactMatches: exactMatches.length,
    // matchesByValue: matchesByValue.length,

    gameMatch: exactMatches.length === random.length,
    allIncorrect: matchesByValue.length + exactMatches.length === 0,
    correctNumberCount: matchesByValue.length + exactMatches.length,
    correctPositionCount: exactMatches.length,
  };
}

//Dani's try

//contrains: arrays are the same length, arrays can have integers between 0-7, arrays can have duplicates
//goals:
//count values that are common between the two arrays.
// count values that are the same value AND are located in the same position of the arrays.

export function compareGuessVsRandom3(guesses, random) {
  let correctNumber = 0;
  let correctPosition = 0;

  correctNumber = guesses.reduce((a, c) => a + random.includes(c), 0);

  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === random[i]) {
      correctPosition++;
    }
  }
  return {
    gameMatch: correctPosition === random.length,
    allIncorrect: correctNumber === 0,
    correctNumberCount: correctNumber,
    correctPositionCount: correctPosition,
  };
}

//TESTS
const myArr2 = [1, 4, 2, 2, 7];
const myArr1 = [0, 2, 2, 2, 1];
console.log(compareGuessVsRandom3(myArr1, myArr2)); //false, false, 3 correct numbers, 2 correct position DA ERROR CUANDO REFERENCIA TIENE REPETIDOS???!!!
const rand = [0, 1, 3, 5];
const guesses1 = [2, 2, 4, 6]; //game responds “all incorrect” //allIncorrect = true
const guesses2 = [0, 2, 4, 6]; //game responds “1 correct number and 1 correct location”
const guesses3 = [2, 2, 1, 1]; //game responds “1 correct number and 0 correct location”
const guesses4 = [0, 1, 5, 6]; //game responds “3 correct numbers and 2 correct location”
console.log(compareGuessVsRandom3(guesses1, rand));
console.log(compareGuessVsRandom3(guesses2, rand));
console.log(compareGuessVsRandom3(guesses3, rand));
console.log(compareGuessVsRandom3(guesses4, rand));
