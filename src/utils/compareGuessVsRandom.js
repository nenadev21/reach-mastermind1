//helper function to count how many values two arrays have in common
const countCommonValuesOfArrays = (arr1, arr2) =>
  arr1.reduce((a, c) => a + arr2.includes(c), 0);

export function compareGuessVsRandom(guesses, random) {
  //check for duplicates
  let perfectMatch = [];
  let equalValues = [];
  let unmatchedGuesses = [];
  let unmatchedRandom = [];
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === random[i]) {
      perfectMatch++;
    } else {
      unmatchedGuesses.push(guesses[i]);
      unmatchedRandom.push(random[i]);
    }
  }
  equalValues = countCommonValuesOfArrays(unmatchedGuesses, unmatchedRandom);
  return {
    gameMatch: perfectMatch === random.length,
    perfectMatch: perfectMatch,
    equalValues: equalValues,
  };
}

const rand = ['0', '1', '3', '5'];
const guesses1 = [2, 2, 4, 6]; //game responds “all incorrect”
const guesses2 = [0, 2, 4, 6]; //game responds “1 correct number and 1 correct location”
const guesses3 = [2, 2, 1, 1]; //game responds “1 correct number and 0 correct location”
const guesses4 = [0, 1, 5, 6]; //game responds “3 correct numbers and 2 correct location”
// console.log(compareGuessVsRandom(guesses1, rand));
// console.log(compareGuessVsRandom(guesses2, rand));
// console.log(compareGuessVsRandom(guesses3, rand));
// console.log(compareGuessVsRandom(guesses4, rand));
