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
